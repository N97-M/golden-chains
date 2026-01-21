import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
    const directoryPath = path.join(process.cwd(), 'public', 'NEW');

    try {
        // Check if directory exists
        if (!fs.existsSync(directoryPath)) {
            return NextResponse.json({ files: [] });
        }

        const files = fs.readdirSync(directoryPath);

        // Filter for media files
        const mediaFiles = files.filter(file =>
            /\.(jpg|jpeg|png|gif|svg|webp|mp4|webm|mov)$/i.test(file)
        ).map(file => {
            // Determine type
            const isVideo = /\.(mp4|webm|mov)$/i.test(file);
            return {
                name: file,
                path: `/NEW/${file}`,
                type: isVideo ? 'video' : 'image'
            };
        });

        return NextResponse.json({ files: mediaFiles });
    } catch (err) {
        console.error('Error reading media directory:', err);
        return NextResponse.json({ error: 'Failed to read directory' }, { status: 500 });
    }
}
