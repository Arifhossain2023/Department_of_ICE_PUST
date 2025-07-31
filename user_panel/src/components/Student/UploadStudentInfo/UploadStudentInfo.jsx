import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './UploadStudentInfo.css';

const UploadStudentInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const existingStudent = location.state?.student || null;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    roll: '',
    email: '',
    batch: '',
    image: null,

    educationalBackground: [{ degree: '', institute: '', session: '', note: '' }],
    publications: [{ type: '', title: '', publisher: '', year: '', note: '' }],
    jobExperience: [{ company: '', role: '', from: '', to: '', location: '', note: '' }],
    achievements: [''],
  });

  const [msg, setMsg] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (existingStudent) {
      // Populate formData with existing student info
      setFormData({
        fullName: existingStudent.fullName || '',
        phone: existingStudent.phone || '',
        roll: existingStudent.roll || '',
        email: existingStudent.email || '',
        batch: existingStudent.batch || '',
        image: null, // image file can't be set directly

        educationalBackground: existingStudent.educationalBackground.length
          ? existingStudent.educationalBackground
          : [{ degree: '', institute: '', session: '', note: '' }],

        publications: existingStudent.publications.length
          ? existingStudent.publications
          : [{ type: '', title: '', publisher: '', year: '', note: '' }],

        jobExperience: existingStudent.jobExperience.length
          ? existingStudent.jobExperience
          : [{ company: '', role: '', from: '', to: '', location: '', note: '' }],

        achievements: existingStudent.achievements.length
          ? existingStudent.achievements
          : [''],
      });

      // Set preview image url if exists
      if (existingStudent.image) {
        setPreviewImage(`http://localhost:4000/uploads/${existingStudent.image}`);
      }
    }
  }, [existingStudent]);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0],
      }));
      setPreviewImage(URL.createObjectURL(files[0]));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleArrayChange = (section, index, field, value) => {
    const updated = [...formData[section]];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, [section]: updated }));
  };

  const handleAdd = section => {
    const blankItem = {
      educationalBackground: { degree: '', institute: '', session: '', note: '' },
      publications: { type: '', title: '', publisher: '', year: '', note: '' },
      jobExperience: { company: '', role: '', from: '', to: '', location: '', note: '' },
      achievements: '',
    };

    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], blankItem[section]],
    }));
  };

  const handleRemove = (section, index) => {
    const updated = [...formData[section]];
    updated.splice(index, 1);
    setFormData(prev => ({ ...prev, [section]: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.includes(formData.roll)) {
      return setMsg("❌ Email এবং Roll মিলে না, আপলোড হবে না।");
    }

    const data = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        data.append(key, JSON.stringify(formData[key]));
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      if (existingStudent) {
        // Update existing student: PUT request
        await axios.put(`http://localhost:4000/api/student/${existingStudent._id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setMsg('✅ তথ্য সফলভাবে আপডেট হয়েছে!');
      } else {
        // New student: POST request
        await axios.post('http://localhost:4000/api/student/upload', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setMsg('✅ তথ্য সফলভাবে আপলোড হয়েছে!');
      }

      // Redirect or reset form after success
      setTimeout(() => {
        navigate('/student');  // তোমার রাউট অনুযায়ী পরিবর্তন করো
      }, 1500);

    } catch (err) {
      console.error(err);
      setMsg('❌ আপলোড/আপডেট ব্যর্থ হয়েছে!');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>{existingStudent ? "🔄 Update Student Info" : "📝 Upload Student Info"}</h2>
      {msg && <p style={{ color: msg.startsWith('✅') ? 'green' : 'red' }}>{msg}</p>}

      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
      <input type="text" name="roll" placeholder="Roll Number" value={formData.roll} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

      <select name="batch" value={formData.batch} onChange={handleChange} required>
        <option value="">Select Batch</option>
        {[...Array(20)].map((_, i) => (
          <option key={i} value={`Batch ${i + 1}`}>Batch {i + 1}</option>
        ))}
      </select>

      <label>Upload Your Image</label>
      <input type="file" name="image" accept="image/*" onChange={handleChange} />

      {previewImage && (
        <img
          src={previewImage}
          alt="preview"
          style={{ width: '120px', height: '120px', borderRadius: '50%', marginTop: '10px', objectFit: 'cover' }}
        />
      )}

      {/* Educational Background */}
      <h4>🎓 Educational Background</h4>
      {formData.educationalBackground.map((item, i) => (
        <div key={i}>
          <select value={item.degree} onChange={e => handleArrayChange('educationalBackground', i, 'degree', e.target.value)} required>
            <option value="">Select Degree</option>
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="BSc Engineering">BSc Engineering</option>
            <option value="Master's">Master's</option>
          </select>
          <input placeholder="Institute" value={item.institute} onChange={e => handleArrayChange('educationalBackground', i, 'institute', e.target.value)} required />
          <input placeholder="Session" value={item.session} onChange={e => handleArrayChange('educationalBackground', i, 'session', e.target.value)} required />
          <input placeholder="Note" value={item.note} onChange={e => handleArrayChange('educationalBackground', i, 'note', e.target.value)} />
          {formData.educationalBackground.length > 1 && (
            <button type="button" onClick={() => handleRemove('educationalBackground', i)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => handleAdd('educationalBackground')}>Add More Education</button>

      {/* Publications */}
      <h4>📚 Publications</h4>
      {formData.publications.map((item, i) => (
        <div key={i}>
          <input placeholder="Type" value={item.type} onChange={e => handleArrayChange('publications', i, 'type', e.target.value)} required />
          <input placeholder="Title" value={item.title} onChange={e => handleArrayChange('publications', i, 'title', e.target.value)} required />
          <input placeholder="Publisher" value={item.publisher} onChange={e => handleArrayChange('publications', i, 'publisher', e.target.value)} required />
          <input placeholder="Year" value={item.year} onChange={e => handleArrayChange('publications', i, 'year', e.target.value)} required />
          <input placeholder="Note" value={item.note} onChange={e => handleArrayChange('publications', i, 'note', e.target.value)} />
          {formData.publications.length > 1 && (
            <button type="button" onClick={() => handleRemove('publications', i)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => handleAdd('publications')}>Add More Publication</button>

      {/* Job Experience */}
      <h4>💼 Job Experience</h4>
      {formData.jobExperience.map((item, i) => (
        <div key={i}>
          <input placeholder="Company" value={item.company} onChange={e => handleArrayChange('jobExperience', i, 'company', e.target.value)} required />
          <input placeholder="Role" value={item.role} onChange={e => handleArrayChange('jobExperience', i, 'role', e.target.value)} required />
          <input placeholder="From" value={item.from} onChange={e => handleArrayChange('jobExperience', i, 'from', e.target.value)} required />
          <input placeholder="To" value={item.to} onChange={e => handleArrayChange('jobExperience', i, 'to', e.target.value)} required />
          <input placeholder="Location" value={item.location} onChange={e => handleArrayChange('jobExperience', i, 'location', e.target.value)} required />
          <input placeholder="Note" value={item.note} onChange={e => handleArrayChange('jobExperience', i, 'note', e.target.value)} />
          {formData.jobExperience.length > 1 && (
            <button type="button" onClick={() => handleRemove('jobExperience', i)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => handleAdd('jobExperience')}>Add More Job</button>

      {/* Achievements */}
      <h4>🏅 Achievements</h4>
      {formData.achievements.map((item, i) => (
        <div key={i}>
          <input placeholder="Achievement" value={item} onChange={e => {
            const updated = [...formData.achievements];
            updated[i] = e.target.value;
            setFormData(prev => ({ ...prev, achievements: updated }));
          }} />
          {formData.achievements.length > 1 && (
            <button type="button" onClick={() => handleRemove('achievements', i)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => handleAdd('achievements')}>Add More Achievement</button>

      <br />
      <button type="submit">{existingStudent ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default UploadStudentInfo;
