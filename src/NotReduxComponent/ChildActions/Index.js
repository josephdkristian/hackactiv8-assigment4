import { ActionSetting } from "./Setting";
import { ActionEdit } from "./Edit";
import { ActionElipsis } from "./Ellipsis";

export const ActionButton = (props) => {
    const _button = [
        { setting: <ActionSetting/>},
        { edit : <ActionEdit/>},
        { ellipsis:<ActionElipsis/> }
    ]
  return props && _button.filter((val, i) => {
    let key = Object.keys(val);
    return props[key];
  });
};
