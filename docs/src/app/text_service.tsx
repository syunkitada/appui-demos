const data = {
    Readme: {
        Text: `
# Text Component

- Text Component

`
    },
    Md: {
        Text: `
# Md Format

## List

- li1
- li2
  - li2.1
  - li2.2
- li3

## Table

| col1 | col2 |
| --- | --- |
| col1 | col2 |

## Code

\`\`\`
code
\`\`\`
`
    },
    Raw: {
        Text: `
<h1>Raw Format</h1>

<p>このページはCssの表示確認にも利用しています</p>

<h2>Headers</h2>
<div style="background-color: #ccc;">
<h1 style="background-color: #aaa;">Header1</h1>
<h2 style="background-color: #aaa;" class="ignore-nav">Header2</h2>
<h3 style="background-color: #aaa;">Header3</h3>
<h4 style="background-color: #aaa;">Header4</h4>
</div>

<h2>Table</h2>


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
                Name: "Md",
                Views: [
                    {
                        Kind: "Text",
                        DataKey: "Md",
                        DataFormat: "Md"
                    }
                ]
            },
            {
                Kind: "Pane",
                Name: "Raw",
                Views: [
                    {
                        Kind: "Text",
                        DataKey: "Raw",
                        DataFormat: "Raw"
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
