import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IGetUserProfilePropertiesWebPartProps {
    description: string;
}
export default class GetUserProfilePropertiesWebPart extends BaseClientSideWebPart<IGetUserProfilePropertiesWebPartProps> {
    private GetUserProperties;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=GetUserProfilePropertiesWebPart.d.ts.map