import CampusAmbassador from "../model/CampusAmbassador.js";

// 📌 Create new Campus Ambassador application (Public POST)
export const createCampusAmbassador = async (req, res) => {
  try {
    const ambassador = await CampusAmbassador.create(req.body);
    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: ambassador,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// 📌 Get all applications
export const getAllCampusAmbassadors = async (req, res) => {
  try {
    const ambassadors = await CampusAmbassador.findAll();
    res.status(200).json({ success: true, data: ambassadors });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 📌 Get single application by ID
export const getCampusAmbassadorById = async (req, res) => {
  try {
    const ambassador = await CampusAmbassador.findByPk(req.params.id);
    if (!ambassador) {
      return res.status(404).json({ success: false, error: "Application not found" });
    }
    res.status(200).json({ success: true, data: ambassador });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 📌 Update application
export const updateCampusAmbassador = async (req, res) => {
  try {
    const ambassador = await CampusAmbassador.findByPk(req.params.id);
    if (!ambassador) {
      return res.status(404).json({ success: false, error: "Application not found" });
    }
    await ambassador.update(req.body);
    res.status(200).json({ success: true, message: "Application updated", data: ambassador });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// 📌 Delete application
export const deleteCampusAmbassador = async (req, res) => {
  try {
    const ambassador = await CampusAmbassador.findByPk(req.params.id);
    if (!ambassador) {
      return res.status(404).json({ success: false, error: "Application not found" });
    }
    await ambassador.destroy();
    res.status(200).json({ success: true, message: "Application deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
