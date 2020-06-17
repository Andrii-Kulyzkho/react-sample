/* eslint-disable no-unused-vars */
import uniforms from 'uniforms';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import SkillsSearchField from './SkillsSearchField/SkillsSearchField';

const schema = new SimpleSchema({
  skills: {
    type: String,
    optional: true,
    uniforms: {
      component: SkillsSearchField,
    },
  },
});

export default schema;
