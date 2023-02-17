import mongoose, { Schema, Mongoose, Document, Model } from 'mongoose';
import ClientAttributes from './Client.entity';
import CommonSchemaClass, { ModelExt } from '../../methods/shared.methods.class';

export type ClientModelExt<T> = ModelExt<T>;

export type ClientDocument = Document & ClientAttributes;

export const ShortClientSchema = new Schema({
  _id: Schema.Types.ObjectId,
  code: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  password: String,
  legalAcceptance: Array,
  country: Object,
  isBussinessPartner: Boolean,
  businessPartner: Object
})
export const ClientSchema: Schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    code: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    password: { type: String, require: true },
    legalAcceptance: { type: Array, require: true },
    country: { type: Object, require: true },
    isBussinessPartner: { type: Boolean, require: true },
    businessPartner: { type: Object, require: true },
    active: { type: String, default: '1' },
    _deletedAt: { type: Date },
    _deleted: { type: Boolean, default: false },
    createdBy: String,
    updatedBy: String,
    enabled: { type: Boolean, default: true },
    alphaCode: { type: String },
    alphaCode2: { type: String },
    numericCode: { type: Number },
  },
  { timestamps: true },
);

ClientSchema.statics.getDocuments = CommonSchemaClass.getDocuments;
ClientSchema.statics.getDocument = CommonSchemaClass.getDocument;
ClientSchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
ClientSchema.statics.patchDocumentsBulk = CommonSchemaClass.patchDocumentsBulk;
ClientSchema.statics.getDocumentsWithCount =
  CommonSchemaClass.getDocumentsWithCount;
ClientSchema.statics.patchDocumentsBulk = CommonSchemaClass.createGenId;
ClientSchema.statics.patchDocumentsBulk = CommonSchemaClass.updateOneWithQuery;

const Client = (mongoose: Mongoose) =>
  mongoose.model<ClientDocument>('Client', ClientSchema, 'client') as Model<
    ClientDocument,
    Record<string, unknown>
  >;

export default Client;
