export async function GET() {
    try {
        // Dynamically import fs and path
        const { default: fs } = await import('fs');
        const { default: path } = await import('path');

        const jsonDirectory = path.join(process.cwd(), 'src/content/terms'); // Adjust the path as necessary
        const files = fs.readdirSync(jsonDirectory);
        const jsonFiles = files.filter(file => file.endsWith('.json'));

        // Extract titles from JSON files
        const titles = jsonFiles.map(file => {
            const filePath = path.join(jsonDirectory, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(fileContent);
            return jsonData.title || file.replace('.json', ''); // Fallback to filename if title is not present
        });

        const responseBody = JSON.stringify(titles);
        return new Response(responseBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Unable to scan directory or read files' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
