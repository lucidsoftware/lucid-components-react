import React from 'react';
import { Story, Meta } from '@storybook/react';

import NewButton from '../components/new-button/new-button';

export default {
  title: 'Components/Button',
  component: NewButton,
  args: {
    children: 'Button Child'
  },
  argTypes: {
    className: {
      type: {
        name: 'string',
        required: false
      },
      control: 'text',
      defaultValue: '',
      description: 'className passed from parent component.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: '""'
        }
      }
    },
    id: {
      type: {
        name: 'string',
        required: false
      },
      control: 'text',
      defaultValue: '',
      description: 'unique ID for the button.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: '""'
        }
      }
    },
    primary: {
      type: {
        name: 'boolean',
        required: false
      },
      control: 'boolean',
      defaultValue: true,
      description: 'sets the button to the primary styles.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    secondary: {
      type: {
        name: 'boolean',
        required: false
      },
      control: 'boolean',
      defaultValue: false,
      description: 'sets the button to the secondary styles.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    inverse: {
      type: {
        name: 'boolean',
        required: false
      },
      control: 'boolean',
      defaultValue: false,
      description: 'inverse the styles.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    asLink: {
      type: {
        name: 'boolean',
        required: false
      },
      control: 'boolean',
      defaultValue: false,
      description: 'display the button as a link.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    underline: {
      type: {
        name: 'enum',
        required: false
      },
      control: {
        type: 'inline-radio',
        options: ['none', 'hover', 'always']
      },
      defaultValue: 'none',
      description: 'if `asLink` is true, sets the link to have an underline.',
      table: {
        type: {
          summary: 'none | hover | always'
        },
        defaultValue: {
          summary: 'none'
        }
      }
    },
    block: {
      type: {
        name: 'boolean',
        required: false
      },
      control: 'boolean',
      defaultValue: false,
      description: 'TBD',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    size: {
      type: {
        name: 'enum',
        required: false
      },
      control: {
        type: 'inline-radio',
        options: ['small', 'regular', 'large']
      },
      defaultValue: 'regular',
      description: 'changes the size of the button.',
      table: {
        type: {
          summary: 'small | regular | large'
        },
        defaultValue: {
          summary: 'none'
        }
      }
    },
    disabled: {
      type: {
        name: 'boolean',
        required: false
      },
      control: 'boolean',
      defaultValue: false,
      description: 'disabled the button or link.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    hover: {
      type: {
        name: 'boolean',
        required: false
      },
      control: 'boolean',
      defaultValue: false,
      description: 'add the hover styles to the component.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    active: {
      type: {
        name: 'boolean',
        required: false
      },
      control: 'boolean',
      defaultValue: false,
      description: 'display the button as active.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    type: {
      type: {
        name: 'enum',
        required: false
      },
      control: {
        type: 'inline-radio',
        options: ['submit', 'button', 'reset']
      },
      defaultValue: 'button',
      description: 'changes the functionality of the button',
      table: {
        type: {
          summary: 'submit | button | reset'
        },
        defaultValue: {
          summary: 'button'
        }
      }
    },
    children: {
      type: {
        name: 'ReactChildren',
        required: false
      },
      control: 'text',
      defaultValue: 'Label',
      description: 'passing children to be rendered in the button or link.',
      table: {
        type: {
          summary: 'ReactChildren'
        },
        defaultValue: {
          summary: ''
        }
      }
    }
  }
} as Meta;

const Template: Story = args => <NewButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button Label'
};
