import sys
import pandas as pd
import joblib
import os
import json  # Import the json module

# Load the model
model_path = os.path.join(os.path.dirname(__file__), 'house_price_model.pkl')
model = joblib.load(model_path)

# Get the input data from command line arguments
try:
    print("Raw input data:", sys.argv[1])  # Print the raw input data for debugging
    input_data = json.loads(sys.argv[1])  # Parse the JSON input
except IndexError:
    print("No input data provided.")
    sys.exit(1)
except json.JSONDecodeError:
    print("Invalid JSON input data.")
    sys.exit(1)

# Create a DataFrame for the input data
input_df = pd.DataFrame([input_data], columns=[
    'bedrooms', 'bathrooms', 'livingArea', 'lotArea', 'floors', 'waterfront', 
    'views', 'condition', 'grade', 'excludingBasement', 'basementArea', 
    'builtYear', 'renovationYear', 'latitude', 'longitude', 
    'livingAreaAfterRenovation', 'lotAreaAfterRenovation', 'schoolsNearby', 
    'airportDistance'
])

# Make prediction
predicted_price = model.predict(input_df)

# Print the predicted price
print(predicted_price[0])
