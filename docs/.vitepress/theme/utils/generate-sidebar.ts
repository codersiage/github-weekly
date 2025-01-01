import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const githubWeeklyDir = path.join(__dirname, '..', '..', '..', 'github-weekly');
const sidebarDataPath = path.join(__dirname, '.vitepress', 'sidebarData.json');

const monthNames = ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'];

function traverseDirectory(dir, sidebarData) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile() && path.extname(file) === '.md' && file !== 'index.md') {
      const relativePath = path.relative(githubWeeklyDir, filePath);
      const pathParts = relativePath.split(path.sep);

      if (pathParts.length >= 3) {
        const year = pathParts[0];
        const month = pathParts[1];
        const title = pathParts[2].replace('.md', '');

        const yearGroup = sidebarData.find(group => group.text === year);
        if (yearGroup) {
          const monthGroup = yearGroup.items.find(item => item.text === month);
          if (monthGroup) {
            monthGroup.items.push({ text: title, link: `/github-weekly/${relativePath}` });
          } else {
            yearGroup.items.push({
              text: month,
              items: [{ text: title, link: `/github-weekly/${relativePath}` }],
              collapsed: true // 默认折叠
            });
          }
        } else {
          sidebarData.push({
            text: year,
            items: [
              {
                text: month,
                items: [{ text: title, link: `/github-weekly/${relativePath}` }],
                collapsed: true // 默认折叠
              }
            ]
          });
        }
      }
    } else if (stats.isDirectory()) {
      traverseDirectory(filePath, sidebarData); // 递归遍历子目录
    }
  });
}

function getSidebarData() {
  const sidebarData = [];

  traverseDirectory(githubWeeklyDir, sidebarData);

  // 按照日期倒序排列
  sidebarData.sort((a, b) => b.text - a.text);
  sidebarData.forEach(yearGroup => {
    yearGroup.items.sort((a, b) => b.text - a.text);
    yearGroup.items.forEach(monthGroup => {
      // monthGroup.items.sort((a, b) => b.text - a.text);
      monthGroup.items.sort((a, b) => b.text.localeCompare(a.text)); // 文件名按字母倒序排列
    });
  });

  // 格式化年份和月份
  sidebarData.forEach(yearGroup => {
    yearGroup.text += ' 年';
    yearGroup.items.forEach(monthGroup => {
      monthGroup.text = monthNames[parseInt(monthGroup.text) - 1];
    });
  });

  // 最近的年月的数据展开
  if (sidebarData.length > 0) {
    const latestYearGroup = sidebarData[0];
    if (latestYearGroup.items.length > 0) {
      latestYearGroup.items[0].collapsed = false;
    }
  }

  return sidebarData;
}

const sidebar = getSidebarData();
// fs.writeFileSync(sidebarDataPath, JSON.stringify(sidebar, null, 2));

export { getSidebarData };