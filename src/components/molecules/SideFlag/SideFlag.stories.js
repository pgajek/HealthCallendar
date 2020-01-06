import React from 'react';
import SideFlag from './SideFlag';
import { storiesOf } from '@storybook/react';
import IconButton from 'components/atoms/IconButton/IconButton';
import yesicon from 'assets/icons/yesicon.svg';
import wrongicon from 'assets/icons/wrongicon.svg';

storiesOf('Molecules/SideFlag', module)
  .add('primary', () => <SideFlag>Body Size</SideFlag>)
  .add('secondary', () => (
    <SideFlag secondary>
      <IconButton icon={yesicon} secondary />
      <IconButton icon={wrongicon} secondary />
    </SideFlag>
  ));
