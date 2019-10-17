var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import * as pnp from 'sp-pnp-js';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import styles from './GetUserProfilePropertiesWebPart.module.scss';
import * as strings from 'GetUserProfilePropertiesWebPartStrings';
var GetUserProfilePropertiesWebPart = /** @class */ (function (_super) {
    __extends(GetUserProfilePropertiesWebPart, _super);
    function GetUserProfilePropertiesWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetUserProfilePropertiesWebPart.prototype.GetUserProperties = function () {
        pnp.sp.profiles.myProperties.get().then(function (result) {
            var userProperties = result.UserProfileProperties;
            var userPropertyValues = "";
            userProperties.forEach(function (property) {
                userPropertyValues += property.Key + " - " + property.Value + "<br/>";
            });
            document.getElementById("spUserProfileProperties").innerHTML = userPropertyValues;
        }).catch(function (error) {
            console.log("Error: " + error);
        });
    };
    GetUserProfilePropertiesWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n     <div class=\"" + styles.helloWorld + "\">\n  <div class=\"" + styles.container + "\">\n    <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + styles.row + "\">\n      <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n        <span class=\"ms-font-xl ms-fontColor-white\" style=\"font-size:28px\">Welcome to SharePoint Framework Development using PnP JS Library</span>\n        \n        <p class=\"ms-font-l ms-fontColor-white\" style=\"text-align: left\">Demo : Retrieve User Profile Properties</p>\n      </div>\n    </div>\n    <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + styles.row + "\">\n    <div style=\"background-color:Black;color:white;text-align: center;font-weight: bold;font-size:18px;\">User Profile Details</div>\n    <br>\n<div id=\"spUserProfileProperties\" />\n    </div>\n  </div>\n</div>";
        this.GetUserProperties();
    };
    Object.defineProperty(GetUserProfilePropertiesWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    GetUserProfilePropertiesWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return GetUserProfilePropertiesWebPart;
}(BaseClientSideWebPart));
export default GetUserProfilePropertiesWebPart;
//# sourceMappingURL=GetUserProfilePropertiesWebPart.js.map