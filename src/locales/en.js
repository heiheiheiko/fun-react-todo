import { flatten } from "../lib/objectHelper";

const locales = {
  "actions": {
    "add": "add",
    "delete": "delete",
  },
  "pages": {
    "about": {
      "title": "About us"
    }
  }
}

export default flatten(locales);