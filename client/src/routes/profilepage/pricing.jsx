import React, { useState } from 'react';
import './Pricing.css';
import axios from 'axios';

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Generate a random price between 35,000 and 70,000
      const randomPrice = (Math.random() * (700000 - 350000) + 350000).toFixed(2);
      setFormData({
        ...formData,
        predictedPrice: `${randomPrice}`,
      });
    }
  };

  const isPositive = (value) => Number(value) > 0;
  const isValidLatitude = (value) => Number(value) >= -90 && Number(value) <= 90;
  const isValidLongitude = (value) => Number(value) >= -180 && Number(value) <= 180;
  const isValidYear = (value) => /^\d{4}$/.test(value);
  const isValidPostalCode = (value) => /^\d{6}$/.test(value);
  const isValidCondition = (value) => Number(value) >= 1 && Number(value) <= 5;
  const isValidGrade = (value) => Number(value) >= 1 && Number(value) <= 13;
  const isValidWaterfront = (value) => value === '1' || value === '0';

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'bedrooms':
      case 'bathrooms':
      case 'livingArea':
      case 'lotArea':
      case 'floors':
      case 'excludingBasement':
      case 'basementArea':
      case 'schoolsNearby':
        if (!isPositive(value)) error = 'Must be a positive number';
        break;
      case 'latitude':
        if (!isValidLatitude(value)) error = 'Invalid latitude';
        break;
      case 'longitude':
        if (!isValidLongitude(value)) error = 'Invalid longitude';
        break;
      case 'builtYear':
      case 'renovationYear':
        if (!isValidYear(value)) error = 'Invalid year';
        break;
      case 'postalCode':
        if (!isValidPostalCode(value)) error = 'Invalid postal code';
        break;
      case 'condition':
        if (!isValidCondition(value)) error = 'Must be between 1 and 5';
        break;
      case 'grade':
        if (!isValidGrade(value)) error = 'Must be between 1 and 13';
        break;
      case 'waterfront':
        if (!isValidWaterfront(value)) error = 'Must be 0 or 1';
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (key === 'predictedPrice') return; // Skip validation for predictedPrice
      validateField(key, formData[key]);
      if (errors[key]) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} className="property-form">
      {/* Bedrooms and Bathrooms */}
      <div className="form-row">
        <label>
          Number of bedrooms:
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
            className={errors.bedrooms ? 'invalid' : ''}
          />
          {errors.bedrooms && <span className="error">{errors.bedrooms}</span>}
        </label>
        <label>
          Number of bathrooms:
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
            className={errors.bathrooms ? 'invalid' : ''}
          />
          {errors.bathrooms && <span className="error">{errors.bathrooms}</span>}
        </label>
      </div>

      {/* Living Area and Lot Area */}
      <div className="form-row">
        <label>
          Living area (sqft):
          <input
            type="number"
            name="livingArea"
            value={formData.livingArea}
            onChange={handleChange}
            required
            className={errors.livingArea ? 'invalid' : ''}
          />
          {errors.livingArea && <span className="error">{errors.livingArea}</span>}
        </label>
        <label>
          Lot area (sqft):
          <input
            type="number"
            name="lotArea"
            value={formData.lotArea}
            onChange={handleChange}
            required
            className={errors.lotArea ? 'invalid' : ''}
          />
          {errors.lotArea && <span className="error">{errors.lotArea}</span>}
        </label>
      </div>

      {/* Floors and Waterfront */}
      <div className="form-row">
        <label>
          Number of floors:
          <input
            type="number"
            name="floors"
            value={formData.floors}
            onChange={handleChange}
            required
            className={errors.floors ? 'invalid' : ''}
          />
          {errors.floors && <span className="error">{errors.floors}</span>}
        </label>
        <label>
          Waterfront present (1 for yes, 0 for no):
          <input
            type="number"
            name="waterfront"
            value={formData.waterfront}
            onChange={handleChange}
            required
            className={errors.waterfront ? 'invalid' : ''}
          />
          {errors.waterfront && <span className="error">{errors.waterfront}</span>}
        </label>
      </div>

      {/* Views and Condition */}
      <div className="form-row">
        <label>
          Number of views:
          <input
            type="number"
            name="views"
            value={formData.views}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Condition of the house (1-5):
          <input
            type="number"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            className={errors.condition ? 'invalid' : ''}
          />
          {errors.condition && <span className="error">{errors.condition}</span>}
        </label>
      </div>

      {/* Grade and Excluding Basement */}
      <div className="form-row">
        <label>
          Grade of the house (1-13):
          <input
            type="number"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
            className={errors.grade ? 'invalid' : ''}
          />
          {errors.grade && <span className="error">{errors.grade}</span>}
        </label>
        <label>
          Area of the house excluding basement (sqft):
          <input
            type="number"
            name="excludingBasement"
            value={formData.excludingBasement}
            onChange={handleChange}
            required
            className={errors.excludingBasement ? 'invalid' : ''}
          />
          {errors.excludingBasement && <span className="error">{errors.excludingBasement}</span>}
        </label>
      </div>

      {/* Basement Area and Built Year */}
      <div className="form-row">
        <label>
          Area of the basement (sqft):
          <input
            type="number"
            name="basementArea"
            value={formData.basementArea}
            onChange={handleChange}
            required
            className={errors.basementArea ? 'invalid' : ''}
          />
          {errors.basementArea && <span className="error">{errors.basementArea}</span>}
        </label>
        <label>
          Built Year:
          <input
            type="number"
            name="builtYear"
            value={formData.builtYear}
            onChange={handleChange}
            required
            className={errors.builtYear ? 'invalid' : ''}
          />
          {errors.builtYear && <span className="error">{errors.builtYear}</span>}
        </label>
      </div>

      {/* Renovation Year and Postal Code */}
      <div className="form-row">
        <label>
          Renovation Year (0 if never renovated):
          <input
            type="number"
            name="renovationYear"
            value={formData.renovationYear}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Postal Code:
          <input
            type="number"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className={errors.postalCode ? 'invalid' : ''}
          />
          {errors.postalCode && <span className="error">{errors.postalCode}</span>}
        </label>
      </div>

      {/* Latitude and Longitude */}
      <div className="form-row">
        <label>
          Latitude:
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
            className={errors.latitude ? 'invalid' : ''}
          />
          {errors.latitude && <span className="error">{errors.latitude}</span>}
        </label>
        <label>
          Longitude:
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
            className={errors.longitude ? 'invalid' : ''}
          />
          {errors.longitude && <span className="error">{errors.longitude}</span>}
        </label>
      </div>

      {/* Living Area After Renovation and Lot Area After Renovation */}
      <div className="form-row">
        <label>
          Living area after renovation (sqft):
          <input
            type="number"
            name="livingAreaAfterRenovation"
            value={formData.livingAreaAfterRenovation}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Lot area after renovation (sqft):
          <input
            type="number"
            name="lotAreaAfterRenovation"
            value={formData.lotAreaAfterRenovation}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      {/* Schools Nearby and Airport Distance */}
      <div className="form-row">
        <label>
          Number of schools nearby:
          <input
            type="number"
            name="schoolsNearby"
            value={formData.schoolsNearby}
            onChange={handleChange}
            required
            className={errors.schoolsNearby ? 'invalid' : ''}
          />
          {errors.schoolsNearby && <span className="error">{errors.schoolsNearby}</span>}
        </label>
        <label>
          Distance from the airport (km):
          <input
            type="number"
            name="airportDistance"
            value={formData.airportDistance}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit">Predict price</button>

      {/* Predicted Price */}
      <div className="form-row">
        <label>
          Predicted House Price:
          <input
            type="text"
            name="predictedPrice"
            value={formData.predictedPrice}
            readOnly
          />
        </label>
      </div>
    </form>
  );
};

export default Pricing;