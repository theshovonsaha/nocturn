#!/bin/bash

# Create necessary directories
mkdir -p assets/collections/images
mkdir -p assets/collections/videos
mkdir -p assets/collections/thumbnails

# Function to download file and maintain filename
download_file() {
    local url=$1
    local directory=$2
    local filename=$(basename "$url" | cut -d'?' -f1)
    
    # Download file if it doesn't exist
    if [ ! -f "$directory/$filename" ]; then
        echo "Downloading $url to $directory/$filename"
        curl -L "$url" -o "$directory/$filename"
    else
        echo "File $filename already exists"
    fi
}

# Download cover images
while IFS= read -r url; do
    [[ $url =~ \'(https://images.unsplash.com/[^\']+)\' ]] && \
    download_file "${BASH_REMATCH[1]}" "assets/collections/images"
done < collections.ts

# Download videos
while IFS= read -r url; do
    [[ $url =~ \'(https://.+\.mp4)\' ]] && \
    download_file "${BASH_REMATCH[1]}" "assets/collections/videos"
done < collections.ts

# Download thumbnails
while IFS= read -r url; do
    [[ $url =~ \'(https://images.unsplash.com/[^\']+)\' ]] && \
    download_file "${BASH_REMATCH[1]}" "assets/collections/thumbnails"
done < collections.ts