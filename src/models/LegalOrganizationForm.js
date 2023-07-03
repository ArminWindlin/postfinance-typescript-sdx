'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalOrganizationForm = void 0;
class LegalOrganizationForm {
    static getAttributeTypeMap() {
        return LegalOrganizationForm.attributeTypeMap;
    }
}
exports.LegalOrganizationForm = LegalOrganizationForm;
LegalOrganizationForm.discriminator = undefined;
LegalOrganizationForm.attributeTypeMap = [
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "Array<LocalizedString>"
    },
    {
        "name": "englishDescription",
        "baseName": "englishDescription",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "shortcut",
        "baseName": "shortcut",
        "type": "Array<LocalizedString>"
    }
];
