const data = {
    Readme: {
        Text: `
# Table Component

- Table Component

`
    },
    Basic: [{ Col1: "C1", Col2: "C2", Col3: "C3", Col4: "C4" }]
};

function getIndex() {
    const view = {
        Name: "Root",
        Kind: "Tabs",
        Children: [
            {
                Kind: "Pane",
                Name: "Readme",
                Views: [
                    {
                        Kind: "Text",
                        DataKey: "Readme"
                    }
                ]
            },
            {
                Kind: "Pane",
                Name: "Basic",
                Views: [
                    {
                        Kind: "Table",
                        DataKey: "Basic",
                        Columns: [
                            { Name: "Col1" },
                            { Name: "Col2" },
                            { Name: "Col3" },
                            { Name: "Col4" }
                        ]
                    }
                ]
            }
        ]
    };

    const index = {
        DefaultRoute: {
            Path: ["Readme"]
        },
        View: view
    };

    return index;
}

const index = {
    getServiceIndex: function (input: any): void {
        const { location, onSuccess, onError } = input;
        const index = getIndex();

        onSuccess({
            index: index,
            data: data
        });
    }
};

export default index;
