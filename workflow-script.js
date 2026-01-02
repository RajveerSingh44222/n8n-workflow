const today = new Date();
today.setHours(0, 0, 0, 0);

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const results = [];

for (const item of items) {
  const bday = new Date(item.json.Birthday);
  bday.setFullYear(today.getFullYear());
  bday.setHours(0, 0, 0, 0);

  if (bday.getTime() === tomorrow.getTime()) {
    results.push({
      json: {
        name: item.json.name, // Must match column name exactly
      },
    });
  }
}

return results;
