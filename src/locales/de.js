import { flatten } from "../lib/objectHelper";

const locales = {
  "actions": {
    "add": "hinzufügen",
    "delete": "löschen",
  },
  "pages": {
    "about": {
      "title": "Über uns"
    }
  }
}

export default flatten(locales);
