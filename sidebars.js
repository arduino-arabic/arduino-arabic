module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'ابدأ هنا',
      items: [
        'getting-started/what-is-arduino',
        'getting-started/tools',
        'getting-started/install-ide',
        'getting-started/first-sketch',
      ],
    },
    {
      type: 'category',
      label: 'المداخل والمخارج',
      items: [
        'io/digital-io',
        'io/analog-input',
        'io/pwm',
      ],
    },
    {
      type: 'category',
      label: 'الحساسات',
      items: [
        'sensors/temperature',
        'sensors/ultrasonic',
        'sensors/motion',
      ],
    },
    {
      type: 'category',
      label: 'المشاريع',
      items: [
        'projects/smart-light',
        'projects/weather-station',
        'projects/robot-car',
      ],
    },
    {
      type: 'category',
      label: 'المرجع',
      items: [
        'reference/functions',
        'reference/libraries',
      ],
    },
  ],
};
