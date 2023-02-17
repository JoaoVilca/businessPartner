import mongoose, { Schema, Mongoose, Document, Model } from 'mongoose';
import BusinessPartnerAttributes from './BusinessPartner.entity';
import CommonSchemaClass, { ModelExt } from '../../methods/shared.methods.class';

export type BusinessPartnerModelExt<T> = ModelExt<T>;

export type BusinessPartnerDocument = Document & BusinessPartnerAttributes;

export const ShortBusinessPartnerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  code: String,
  typePerson: Object,
  RTN: String,
  typeDocument: Object,
  idLegalRepresentative: String,
  businessName: String,
  address: String,
  description: String,
  productiveSector: Object,
  locationTwo: Object,
  locationZone: Object,
  references: String,
  phoneNumberBusiness: String,
  emailOfficial: String,
  logo: String,
  socialnetwork: Array
})
export const BusinessPartnerSchema: Schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    code: { type: String, require: true },
    typePerson: { type: Object, require: true },
    RTN: { type: String, require: true },
    typeDocument: { type: Object, require: true },
    idLegalRepresentative: { type: String, require: true },
    businessName: { type: String, require: true },
    address: { type: String, require: true },
    description: { type: String, require: true },
    productiveSector: { type: Object, require: true },
    locationTwo: { type: Object, require: true },
    locationZone: { type: Object, require: true },
    references: { type: String, require: true },
    phoneNumberBusiness: { type: String, require: true },
    emailOfficial: { type: String, require: true },
    logo: { type: String, require: true },
    socialnetwork: { type: Array, require: true },
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

BusinessPartnerSchema.statics.getDocuments = CommonSchemaClass.getDocuments;
BusinessPartnerSchema.statics.getDocument = CommonSchemaClass.getDocument;
BusinessPartnerSchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
BusinessPartnerSchema.statics.patchDocumentsBulk = CommonSchemaClass.patchDocumentsBulk;
BusinessPartnerSchema.statics.getDocumentsWithCount =
  CommonSchemaClass.getDocumentsWithCount;
BusinessPartnerSchema.statics.patchDocumentsBulk = CommonSchemaClass.createGenId;
BusinessPartnerSchema.statics.patchDocumentsBulk = CommonSchemaClass.updateOneWithQuery;

const BusinessPartner = (mongoose: Mongoose) =>
  mongoose.model<BusinessPartnerDocument>('BusinessPartner', BusinessPartnerSchema, 'business-partner') as Model<
    BusinessPartnerDocument,
    Record<string, unknown>
  >;

export default BusinessPartner;
