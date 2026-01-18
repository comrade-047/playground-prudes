import mongoose, {Schema, Document} from "mongoose";

export interface ISkill extends Document {
    name: string;
    category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Language' | 'Cloud';
    proficiency: number;
}

const SkillSchema: Schema = new Schema({
    name : { type: String, required: true, unique: true},
    category: {
        type: String,
        required: true,
        enum: ['Frontend', 'Backend', 'Database', 'Tools', 'Language']
    },
    proficiency: { type: Number, min: 1, max: 10, default: 5}
});

export default mongoose.model<ISkill>('Skill', SkillSchema);