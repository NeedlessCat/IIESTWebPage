//API for adding faculty..
const addFaculty = async (req, res) => {
  try {
    const {
      name,
      designation,
      department,
      experience,
      about,
      publication,
      project,
      award,
      phone,
      email,
    } = req.body;
    const imageFile = req.file;
    
    //checking for all data to add doctor..
    if(!name || !designation || !department || !experience || !about || !publication || !project || !award || !phone || !email || !imageFile ) {
        return res.json({success:false, message:})
    }

  } catch (error) {}
};
export { addFaculty };
