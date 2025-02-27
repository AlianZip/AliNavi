# AliNavi
# **This application is under development!**


![AliNavi Logo](link_to_logo_image) <!-- Если есть логотип, добавьте ссылку на изображение -->

****

<b>AliNavi - is a modern file manager built using Rust and Tauri. The application provides a convenient interface for navigating the file system with the ability to preview different types of files.</b>
****
## Features

- **Preview files:**
  - Images (JPG, PNG, BMP etc.)
  - Text (TXT, Markdown, JSON etc.)
  - Archives (ZIP, RAR, etc.)

- **Tech stack:**
  - Backend: Rust
  - Framework: Tauri

- **Additional features:**
  - Quick file search
  - Basic file operations (copy, move, delete)
  - Preview content without opening external applications

****

## Installation

### Requirements

- Rust
- Node.js
- Your platform's build tools

### Build from sources

```bash
# Clone repo
git clone https://github.com/AlianZip/AliNavi.git
cd AliNavi

# Install dependencies
npm install    # or pnpm/yarn
cargo build

# Build
npm run tauri build