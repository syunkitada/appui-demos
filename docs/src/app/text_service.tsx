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

<h2>Headers</h2>
<hr />
<h1 style="background-color: #aaa;">Header1</h1>
<p>Text1</p>
<hr />

<h2 style="background-color: #aaa;" class="ignore-nav">Header2</h2>
<p>Text2</p>
<hr />

<h3 style="background-color: #aaa;">Header3</h3>
<p>Text3</p>
<hr />

<h4 style="background-color: #aaa;">Header4</h4>
<p>Text4</p>
<hr />

<h2>Table</h2>
<table>
  <thead>
    <tr>
      <th>col1</th><th>col2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>col1</td><td>col2</td>
    </tr>
  </tbody>
</table>

<h2>List</h2>
<ul>
    <li>li1</li>
    <li>li2</li>
</ul>

<ol>
    <li>li1</li>
    <li>li2</li>
</ol>

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
