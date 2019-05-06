import React from 'react';
import { View } from 'react-native';

import { Select } from '../../..';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

const store = new Store({
  selectedItem: '',
});

const data = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
];

export default storiesOf('Components|Select/Flat', module)
  .addParameters({ jest: ['SelectFlat'] })
  .add('simple', () => (
    <Container>
      <Header title={'Flat Select'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Select
              type={'flat'}
              label={'Select'}
              menuItems={data}
              onSelect={value => store.set({ selectedItem: value.name })}
              selectedItem={state.selectedItem}
            />
            <Select
              type={'flat'}
              label={'Select'}
              menuItems={data}
              onSelect={value => store.set({ selectedItemTwo: value.name })}
              selectedItem={state.selectedItemTwo}
              textFieldProps={{
                error: true,
                helperText: 'error',
                containerStyle: { marginTop: 40 },
              }}
            />
          </View>
        )}
      </State>
    </Container>
  ));
