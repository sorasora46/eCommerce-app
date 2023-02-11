import { Schema, model } from "mongoose";

export enum ReportReason {
  INAPPROPRIATE_CONTENT = "inappropriate content",
  FAKE_PROFILE = "fake profile",
  HATE_SPEECH = "hate speech",
  HARASSMENT = "harassment",
  SPAM = "spam",
  SCAM = "scam",
}

export interface IReport {
  reportBy: string; // userId
  userReported: string; // userId
  reason: ReportReason;
}

const reportSchema = new Schema<IReport>({
  reportBy: { type: String, required: true },
  userReported: { type: String, required: true },
  reason: { type: String, required: true },
});

export const Report = model("Report", reportSchema);
