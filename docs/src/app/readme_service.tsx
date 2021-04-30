const data = {
    Readme: {
        Text: `
# README
`
    }
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
