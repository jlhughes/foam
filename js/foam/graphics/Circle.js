/**
 * @license
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

CLASS({
  package: 'foam.graphics',
  name: 'Circle',
  extends: 'foam.graphics.CView',

  properties: [
    {
      name:  'border',
      label: 'Border Color',
      type:  'String',
      defaultValue: undefined
    },
    {
      name:  'borderWidth',
      defaultValue: 1
    },
    {
      name: 'r',
      label: 'Radius',
      defaultValue: 20
    },
    {
      name: 'startAngle',
      defaultValue: 0
    },
    {
      name: 'endAngle',
      defaultValue: Math.PI*2
    },
    {
      name: 'width',
      defaultValueFn: function() { return 2*(this.r + (this.border ? this.borderWidth : 0)); }
    },
    {
      name: 'height',
      defaultValueFn: function() { return 2*(this.r + (this.border ? this.borderWidth : 0)); }
    },
  ],

  methods: [
    function paintSelf(c) {
      if ( ! c ) return;

      if ( ! this.r ) return;

      if ( this.color) {
        c.beginPath();
        c.moveTo(0,0);
        c.arc(0, 0, this.r, -this.endAngle, -this.startAngle, false);
        c.closePath();

        c.fillStyle = this.color;
        c.fill();
      }

      this.paintBorder(c);
    },
    function paintBorder(c) {
      if ( this.border ) {
        c.lineWidth = this.borderWidth;

        c.beginPath();
        c.arc(0, 0, this.r+this.borderWidth/2-1, -this.endAngle, -this.startAngle, false);
        c.closePath();

        c.strokeStyle = this.border;
        c.stroke();
      }
    },
    function intersects(c) {
      var r = this.r + c.r;
      if ( this.border ) r += this.borderWidth-2;
      if ( c.border    ) r += c.borderWidth-2;
      return Movement.distance(this.x-c.x, this.y-c.y) <= r;
    }
  ]
});
