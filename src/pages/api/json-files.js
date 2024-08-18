let fs;
let path;

if (typeof window === 'undefined') {
  fs = require('fs');
  path = require('path');
}

export async function GET() {
    if (!fs || !path) {
        return new Response(JSON.stringify({ error: 'This operation is not supported in the browser.' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    try {
        const jsonDirectory = path.join(process.cwd(), 'src/content/terms'); // Adjust the path as necessary
        const files = fs.readdirSync(jsonDirectory);
        const jsonFiles = files.filter(file => file.endsWith('.json'));
        const responseBody = JSON.stringify(jsonFiles.map(file => file.replace('.json', '')));
        return new Response(responseBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Unable to scan directory' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
