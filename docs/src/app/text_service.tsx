const data = {
    Readme: {
        Text: `
# Text Component

- Text Component

`
    },
    Raw: {
        Text: `
<h1>Basic Items</h1>

<h2>Headers</h2>
<div style="background-color: #ccc;">
<h1 style="background-color: #aaa;">Header1</h1>
<h2 style="background-color: #aaa;" class="ignore-nav">Header2</h2>
<h3 style="background-color: #aaa;">Header3</h3>
<h4 style="background-color: #aaa;">Header4</h4>
</div>

<h2>Table</h2>
`
    },
    Md: {
        Text: `
# Header1

Text1

## Header2

Text2

### Header3

Text3
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
            },
            {
                Kind: "Pane",
                Name: "RawText",
                Views: [
                    {
                        Kind: "Text",
                        DataKey: "Raw",
                        DataFormat: "Raw"
                    }
                ]
            },
            {
                Kind: "Pane",
                Name: "MdText",
                Views: [
                    {
                        Kind: "Text",
                        DataKey: "Md",
                        DataFormat: "Md"
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
