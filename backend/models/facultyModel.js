import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      enum: [
        "Director",
        "Head of Department",
        "Professor",
        "Associate Professor",
        "Assistant Professor",
        "Lab Assistant",
        "Others",
      ],
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    about: {
      intro: {
        type: String,
        required: true,
      },
      academic: [{ type: String }],
      teaching: [{ type: String }],
      research: [{ type: String }],
    },
    publication: [
      {
        type: {
          type: String,
          enum: ["Journal", "Conference", "Book"],
          required: true,
        },
        team: { type: String, required: true },
        topic: { type: String, required: true },
        year: { type: String, required: true },
      },
    ],
    project: [
      {
        topic: { type: String, required: true },
        status: { type: String, required: true },
        year: { type: String, required: true },
      },
    ],
    award: [
      {
        title: { type: String, required: true },
        year: { type: String, required: true },
      },
    ],
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const facultyModel =
  mongoose.models.faculty || mongoose.model("faculty", facultySchema);

export default facultyModel;
