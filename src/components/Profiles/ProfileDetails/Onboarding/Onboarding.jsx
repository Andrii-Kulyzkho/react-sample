/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';
import Tooltip from './Tooltip/Tooltip';
import { FirstStep, SecondStep, ThirdStep } from './styles';

import profileIcon from '../../../../assets/icons/profile.svg';

const commonStepStyles = {
  overlay: {
    height: 'unset',
    backgroundColor: 'none',
  },
};

const onboardingSteps = [
  {
    content: (
      <FirstStep>
        <img src={profileIcon} alt="Teamwork Icon" />
        <h4>Your Profile</h4>
        <p>
          Welcome to your own profile! You can add a short bio to tell people
          about yourself and add edit your skills.
        </p>
      </FirstStep>
    ),
    disableBeacon: true,
    showSkipButton: true,
    locale: { skip: 'SKIP', close: 'NEXT' },
    placement: 'top',
    target: '.fifth-step',
    styles: commonStepStyles,
  },
  {
    content: (
      <SecondStep>
        <h4>Skills</h4>
        <p>
          Skills are important for CONNECT to match you with the right people.
          Add or edit your skill list here.
        </p>
      </SecondStep>
    ),
    disableBeacon: true,
    locale: { skip: 'SKIP', close: 'NEXT' },
    placement: 'top',
    target: '.sixth-step',
    styles: commonStepStyles,
  },
  {
    content: (
      <ThirdStep>
        <h4>Profile Picture</h4>
        <p>Lastly, don't forget to add your picture! Happy CONNECTing!</p>
      </ThirdStep>
    ),
    disableBeacon: true,
    locale: { skip: 'SKIP', close: 'DONE' },
    placement: 'bottom',
    target: '.seventh-step',
    styles: commonStepStyles,
  },
];

const Onboarding = () => {
  const [steps, setSteps] = useState(onboardingSteps);
  const [run, setRun] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  const handleJoyrideCallback = data => {
    const { action, index, status, type } = data;

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1));
    } else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false);
    }
  };

  return (
    <Joyride
      tooltipComponent={Tooltip}
      steps={steps}
      stepIndex={stepIndex}
      run={run}
      disableScrollParentFix
      disableScrolling
      callback={handleJoyrideCallback}
      showSkipButton={stepIndex !== 2}
      hideBackButton
      spotlightClicks={false}
      styles={{
        options: {
          arrowColor: stepIndex === 3 ? '#346CB9' : '#FFF',
          zIndex: 10000,
          overlayColor: '#2B3642',
        },
      }}/>
  );
};

export default Onboarding;
