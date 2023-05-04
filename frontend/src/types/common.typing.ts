import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export namespace Common {
  export type NavGroup = {
    id: string;
    label: string;
    icon: IconDefinition;
    visible: boolean;
    to: string;
  };
}
