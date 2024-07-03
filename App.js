const fs = require('fs');
const filePath = 'file.txt';

try {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log('Original File content:', data);
  const newData = 'hello universe';
  fs.writeFileSync(filePath, newData, 'utf-8');
  console.log('File has been updated');
  const updatedData = fs.readFileSync(filePath, 'utf-8');
  console.log('Updated File content:', updatedData);
} 
catch (error) {
  console.error('Error reading or writing the file:', error);
}