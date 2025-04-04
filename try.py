import cv2
from datetime import datetime
#C:/Users/Soumya/OneDrive/Documents/CodePractice/medic/templates/31CsUtgSdiL._AC_UF1000,1000_QL80_.jpg
# Function to check if the expiry date is valid
def check_expiry(expiry_date):
    current_date = datetime.now()
    if expiry_date < current_date:
        return False  # Expired
    return True  # Valid

# Function to check if the packaging is sealed using OpenCV
import cv2
import numpy as np

def is_sealed_package(image_path, threshold1=100, threshold2=200, min_contour_area=100, seal_color_range=None):
    """
    Determines if the packaging is sealed by looking for tampering signs in the image.
    
    Parameters:
    - image_path: Path to the image of the packaging.
    - threshold1, threshold2: Parameters for the Canny edge detection.
    - min_contour_area: Minimum contour area to detect tampering.
    - seal_color_range: Optional color range to detect tamper-evident seal color (in HSV color space).
    
    Returns:
    - "Sealed" if the package looks intact.
    - "Unsealed" if there are signs of tampering.
    """
    # Load the image
    image = cv2.imread("C:/Users/Soumya/OneDrive/Documents/CodePractice/medic/templates/31CsUtgSdiL._AC_UF1000,1000_QL80_.jpg")
    if image is None:
        raise ValueError(f"Image at {"C:/Users/Soumya/OneDrive/Documents/CodePractice/medic/templates/31CsUtgSdiL._AC_UF1000,1000_QL80_.jpg"} could not be loaded.")
    
    # Convert to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply edge detection (Canny)
    edges = cv2.Canny(gray, threshold1=threshold1, threshold2=threshold2)

    # Find contours of edges
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Filter contours by minimum area threshold
    filtered_contours = [cnt for cnt in contours if cv2.contourArea(cnt) > min_contour_area]

    # If significant contours are found, it suggests potential tampering or opened package
    if filtered_contours:
        return "Unsealed"
    
   


# Example usage
med_expiry = datetime(2025, 6, 15)  # Sample expiry date
med_image_path = "path/to/medication/image.jpg"  # Sample image path

# Check expiry date
if check_expiry(med_expiry):
    print("Medicine is valid.")
else:
    print("Medicine is expired.")

# Check sealed packaging
package_status = is_sealed_package(med_image_path)
print(f"Packaging is {package_status}.")
