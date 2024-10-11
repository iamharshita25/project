import React, { useState } from 'react';
import './Pricing.css'

const Pricing = () => {
  const [formData, setFormData] = useState({
    bedrooms: '',
    bathrooms: '',
    livingArea: '',
    lotArea: '',
    floors: '',
    waterfront: '',
    views: 0,
    condition: 5,
    grade: 12,
    excludingBasement: '',
    basementArea: '',
    builtYear: 2022,
    renovationYear: 0,
    postalCode: '',
    latitude: '',
    longitude: '',
    livingAreaAfterRenovation: 2000,
    lotAreaAfterRenovation: 1500,
    schoolsNearby: '',
    airportDistance: 15,
    predictedPrice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields and submit
    // Add your form submission logic here
  };

  const isPositive = (value) => value > 0;
  const isValidLatitude = (value) => value >= -90 && value <= 90;
  const isValidLongitude = (value) => value >= -180 && value <= 180;
  const isValidYear = (value) => /^\d{4}$/.test(value);
  const isValidPostalCode = (value) => /^\d{6}$/.test(value);

  // Custom validations
  const isValidCondition = (value) => value >= 1 && value <= 5;
  const isValidGrade = (value) => value >= 1 && value <= 13;
  const isValidWaterfront = (value) => value === '1' || value === '0';

  return (
    <form onSubmit={handleSubmit} className="property-form">
      <div className="form-row">
        <label>Number of bedrooms:
          <input 
            type="number" 
            name="bedrooms" 
            value={formData.bedrooms}
            onChange={handleChange}
            required 
            className={!isPositive(formData.bedrooms) ? 'invalid' : ''} 
          />
        </label>
        <label>Number of bathrooms:
          <input 
            type="number" 
            name="bathrooms" 
            value={formData.bathrooms}
            onChange={handleChange}
            required 
            className={!isPositive(formData.bathrooms) ? 'invalid' : ''} 
          />
        </label>
      </div>
      <div className="form-row">
        <label>Living area (sqft):
          <input 
            type="number" 
            name="livingArea" 
            value={formData.livingArea}
            onChange={handleChange}
            required 
            className={!isPositive(formData.livingArea) ? 'invalid' : ''} 
          />
        </label>
        <label>Lot area (sqft):
          <input 
            type="number" 
            name="lotArea" 
            value={formData.lotArea}
            onChange={handleChange}
            required 
            className={!isPositive(formData.lotArea) ? 'invalid' : ''} 
          />
        </label>
      </div>
      <div className="form-row">
        <label>Number of floors:
          <input 
            type="number" 
            name="floors" 
            value={formData.floors}
            onChange={handleChange}
            required 
            className={!isPositive(formData.floors) ? 'invalid' : ''} 
          />
        </label>
        <label>Waterfront present (1 for yes, 0 for no):
          <input 
            type="number" 
            name="waterfront" 
            value={formData.waterfront}
            onChange={handleChange}
            required
            className={!isValidWaterfront(formData.waterfront) ? 'invalid' : ''} 
          />
        </label>
      </div>
      <div className="form-row">
        <label>Number of views:
          <input 
            type="number" 
            name="views" 
            value={formData.views}
            onChange={handleChange}
            required
          />
        </label>
        <label>Condition of the house (1-5):
          <input 
            type="number" 
            name="condition" 
            value={formData.condition}
            onChange={handleChange}
            required
            className={!isValidCondition(formData.condition) ? 'invalid' : ''} 
          />
        </label>
      </div>
      <div className="form-row">
        <label>Grade of the house (1-13):
          <input 
            type="number" 
            name="grade" 
            value={formData.grade}
            onChange={handleChange}
            required
            className={!isValidGrade(formData.grade) ? 'invalid' : ''} 
          />
        </label>
        <label>Area of the house excluding basement (sqft):
          <input 
            type="number" 
            name="excludingBasement" 
            value={formData.excludingBasement}
            onChange={handleChange}
            required 
            className={!isPositive(formData.excludingBasement) ? 'invalid' : ''} 
          />
        </label>
      </div>
      <div className="form-row">
        <label>Area of the basement (sqft):
          <input 
            type="number" 
            name="basementArea" 
            value={formData.basementArea}
            onChange={handleChange}
            required 
            className={!isPositive(formData.basementArea) ? 'invalid' : ''} 
          />
        </label>
        <label>Built Year:
          <input 
            type="number" 
            name="builtYear" 
            value={formData.builtYear}
            onChange={handleChange}
            required 
            className={!isValidYear(formData.builtYear) ? 'invalid' : ''} 
          />
        </label>
      </div>
      <div className="form-row">
        <label>Renovation Year (0 if never renovated):
          <input 
            type="number" 
            name="renovationYear" 
            value={formData.renovationYear}
            onChange={handleChange}
            required
          />
        </label>
        <label>Postal Code:
          <input 
            type="number" 
            name="postalCode" 
            value={formData.postalCode}
            onChange={handleChange}
            required 
            className={!isValidPostalCode(formData.postalCode) ? 'invalid' : ''} 
          />
        </label>
      </div>
      <div className="form-row">
        <label>Latitude:
          <input 
            type="number" 
            name="latitude" 
            value={formData.latitude}
            onChange={handleChange}
            required 
            className={!isValidLatitude(formData.latitude) ? 'invalid' : ''} 
          />
        </label>
        <label>Longitude:
          <input 
            type="number" 
            name="longitude" 
            value={formData.longitude}
            onChange={handleChange}
            required 
            className={!isValidLongitude(formData.longitude) ? 'invalid' : ''} 
          />
        </label>
      </div>
      <div className="form-row">
        <label>Living area after renovation (sqft):
          <input 
            type="number" 
            name="livingAreaAfterRenovation" 
            value={formData.livingAreaAfterRenovation}
            onChange={handleChange}
            required
          />
        </label>
        <label>Lot area after renovation (sqft):
          <input 
            type="number" 
            name="lotAreaAfterRenovation" 
            value={formData.lotAreaAfterRenovation}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>Number of schools nearby:
          <input 
            type="number" 
            name="schoolsNearby" 
            value={formData.schoolsNearby}
            onChange={handleChange}
            required 
            className={!isPositive(formData.schoolsNearby) ? 'invalid' : ''} 
          />
        </label>
        <label>Distance from the airport (km):
          <input 
            type="number" 
            name="airportDistance" 
            value={formData.airportDistance}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      
      <button type="submit">Predict price</button>
      
      <div className="form-row">
        <label>Predicted House Price:
          <input 
            type="number" 
            name="predictedPrice" 
            value={formData.predictedPrice}
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
};

export default Pricing;
