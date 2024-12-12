import React, { useState, useEffect } from 'react';
import { petService } from '../../services/petService';
import '../../styles/CreatePetForm.css'

function CreatePetForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [types, setTypes] = useState([]);
  const [colors, setColors] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchCharacteristics() {
      try {
        const data = await petService.getCharacteristics();
        setTypes(data.types);
        setColors(data.colors);
      } catch (err) {
        setError('Failed to load characteristics');
      }
    }
    fetchCharacteristics();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const newPet = { name, type, color };
      await petService.registerPet(newPet);
      setSuccess(true);
      setName('');
      setType('');
      setColor('');
    } catch (err) {
      setError(err.message || 'Failed to register pet');
    }
  };

  return (
    <div className="create-pet-form">
        <h2>Create New Pet</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Pet registered successfully!</p>}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="type">Type:</label>
                <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                >
                    <option value="" disabled>Select a type</option>
                    {types.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="color">Color:</label>
                <select
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                >
                    <option value="" disabled>Select a color</option>
                    {colors.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Create Pet</button>
        </form>
    </div>
);
}

export default CreatePetForm;
