/* eslint-disable no-unused-vars */
import uniforms from 'uniforms';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import LongTextField from 'uniforms-material/LongTextField';

const schema = new SimpleSchema({
  about: {
    type: String,
    optional: true,
    uniforms: {
      component: LongTextField,
    },
  },
});

export default schema;
