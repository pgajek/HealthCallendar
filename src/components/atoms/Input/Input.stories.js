import React from 'react';
import Input from './Input';
import { storiesOf } from '@storybook/react';

storiesOf('Input', module).add('primary', () => <Input placeholder="login" />);
