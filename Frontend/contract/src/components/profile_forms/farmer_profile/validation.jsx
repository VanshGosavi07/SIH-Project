//farmer profile validation file
export const validateFarmerProfile = (formData) => {
    const errors = {};
  
    // Farmer Information validation
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.mobileNumber) errors.mobileNumber = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobileNumber)) errors.mobileNumber = "Mobile number should be 10 digits";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.age) errors.age = "Age is required";
    else if (formData.age < 18 || formData.age > 120) errors.age = "Age should be between 18 and 120";
    if (!formData.experience) errors.experience = "Experience is required";
    if (!formData.contractsMade) errors.contractsMade = "Contracts made is required";
  
    // Farm Information validation
    if (!formData.farmAddress.trim()) errors.farmAddress = "Farm address is required";
    if (!formData.landArea) errors.landArea = "Land area is required";
    if (!formData.soilType) errors.soilType = "Soil type is required";
    if (formData.soilType === "Others" && !formData.customSoilType.trim()) errors.customSoilType = "Custom soil type is required";
    if (!formData.farmType) errors.farmType = "Farm type is required";
    if (!formData.well) errors.well = "Well information is required";
  
    // Preferred Crops validation
    if (formData.preferredCrops.length === 0) errors.preferredCrops = "At least one preferred crop is required";
  
    // Achievements validation
    formData.achievements.forEach((achievement, index) => {
      if (!achievement.title.trim()) errors[`achievements[${index}].title`] = "Achievement title is required";
      if (!achievement.date) errors[`achievements[${index}].date`] = "Achievement date is required";
    });
  
    // Additional Information validation
    formData.additionalInfo.forEach((info, index) => {
      if (!info.title.trim()) errors[`additionalInfo[${index}].title`] = "Additional info title is required";
      if (!info.info.trim()) errors[`additionalInfo[${index}].info`] = "Additional info is required";
    });
  
    // Previous Contracts validation
    formData.contracts.forEach((contract, index) => {
      if (!contract.title.trim()) errors[`contracts[${index}].title`] = "Contract title is required";
      if (!contract.date) errors[`contracts[${index}].date`] = "Contract date is required";
    });
  
    return errors;
  };