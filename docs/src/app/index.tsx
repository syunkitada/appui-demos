import { IProvider } from "../appui/src/provider/IProvider";
import data from "../appui/src/data";

import readme_service from "./readme_service";
import text_service from "./text_service";

class Provider implements IProvider {
    constructor() {
        return;
    }

    getInitData(input: any): any {
        return {
            DefaultServiceName: "Readme",
            DashboardView: {
                Logo: {
                    Kind: "Text",
                    Name: "Home"
                }
            },
            LoginView: {
                Name: "Login",
                Fields: [
                    {
                        Name: "User Name",
                        Key: "User",
                        Kind: "Text",
                        Required: true
                    }
                ]
            }
        };
    }

    init(input: any): void {
        const { onSuccess } = input;

        data.auth = {
            Authority: {
                Name: "Guest",
                ServiceMap: {
                    // Priorityが低いほうが優先度が高く、左メニューバーの一番上にくる
                    Readme: { Priority: 0 },
                    Text: { Priority: 2 }
                }
            }
        };

        onSuccess({});
        return;
    }

    login(input: any): void {
        return;
    }

    logout(input: any): void {
        return;
    }

    getServiceIndex(input: any): void {
        const { serviceName } = input;
        switch (serviceName) {
            case "Readme":
                readme_service.getServiceIndex(input);
                break;
            case "Text":
                text_service.getServiceIndex(input);
                break;
        }
    }

    getQueries(input: any): void {
        return;
    }

    submitQueries(input: any): void {
        return;
    }
}

const index = {
    Provider
};
export default index;
