import React from 'react';
import Switch from '..';

export default function index1() {
  return (
    <div>
      <Switch style={{ marginRight: '10px' }} defaultChecked small />
      <Switch defaultChecked />
    </div>
  );
}
