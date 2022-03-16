const ExcelJS = require("exceljs");
const data2 = require("../data/data2");
const { colData, topics } = require("../data/data1");
const { data } = require("../data/mockData");

const createExcel1 = (req, res) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("My Sheet");

  let columnToMarge = colData.attributes.reduce(
    (acc, attribute) => (acc += attribute.options.length),
    1
  );

  worksheet.mergeCells(1, 2, 1, columnToMarge);
  const cellTitle = worksheet.getCell(1, 4);
  cellTitle.value = colData.title;
  cellTitle.alignment = { horizontal: "right", wrapText: true };
  cellTitle.font = {
    name: "Arial",
    size: 36,
    bold: true,
    color: { argb: "00529F" },
  };

  worksheet.mergeCells(2, 2, 2, columnToMarge);
  const cellSubTitle = worksheet.getCell(2, 4);
  cellSubTitle.value = colData.subTitle;
  cellSubTitle.alignment = { horizontal: "right", wrapText: true };
  cellSubTitle.font = {
    name: "Arial",
    size: 28,
    bold: true,
    color: { argb: "00529F" },
  };

  columnToMarge = 1;
  const attrHeadRow = colData.filteredTitle ? 4 : 3;
  // const attributes = [];
  const cellPathLeftHash = {};
  const cellPathTopHash = {};
  // const topOffset = colData.filteredTitle ? 7 : 6;
  // const leftOffset = 1;

  worksheet.getRow(attrHeadRow).height = 26;

  colData.attributes.forEach((attribute) => {
    const columnNo = columnToMarge + 1;
    columnToMarge += attribute.options.length;

    worksheet.mergeCells(attrHeadRow, columnNo, attrHeadRow, columnToMarge);
    const cellHeading = worksheet.getCell(attrHeadRow, columnNo);
    cellHeading.value = attribute.title;
    cellHeading.name = attribute.id;

    cellHeading.alignment = { horizontal: "center", vertical: "middle" };
    cellHeading.fill = {
      type: "pattern",
      pattern: "solid",
    };
    cellHeading.font = {
      name: "Arial",
      size: 10,
      bold: true,
      color: { argb: "FFFFFF" },
    };
    // attributes.push(attribute.options.map((attr) => attr.title));
    attribute.options.forEach((option, optionColNo) => {
      cellPathLeftHash[option.id] = optionColNo + columnNo;

      const cellSubHeading = worksheet.getCell(
        attrHeadRow + 1,
        optionColNo + columnNo
      );
      const responseCell = worksheet.getCell(
        attrHeadRow + 2,
        optionColNo + columnNo
      );
      cellSubHeading.value = option.title;
      cellSubHeading.name = option.id;
      worksheet.getRow(attrHeadRow + 1).height = 175;
      cellSubHeading.alignment = {
        textRotation: 90,
        wrapText: true,
        horizontal: "center",
      };
      cellSubHeading.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "BEBEBE" },
      };
      cellSubHeading.border = {
        left: {
          style: "thin",
        },
        right: {
          style: "thin",
        },
      };
      cellSubHeading.font = {
        name: "Arial",
        size: 9,
        bold: true,
      };

      const respondedPeople = data.filter((personData) =>
        personData.attributes.some((personAttribute) => {
          return (
            personAttribute.attributeId === attribute.id &&
            personAttribute.optionId === option.id
          );
        })
      );

      responseCell.value = respondedPeople.length ?? 0;
      responseCell.alignment = {
        horizontal: "center",
      };
      responseCell.fill = {
        type: "pattern",
        pattern: "solid",
      };
      responseCell.font = {
        name: "Arial",
        size: 10,
        bold: true,
        color: { argb: "FFFFFF" },
      };
    });
  });

  // console.log(cellPathHash);

  // const attributesRow = worksheet.addRow(attributes.flat());
  // attributesRow.height = 175;
  // attributesRow.alignment = {
  //   textRotation: 90,
  //   wrapText: true,
  //   horizontal: "center",
  // };
  // attributesRow.fill = {
  //   type: "pattern",
  //   pattern: "solid",
  //   fgColor: { argb: "BEBEBE" },
  // };
  // attributesRow.border = {
  //   left: {
  //     style: "thin",
  //   },
  //   right: {
  //     style: "thin",
  //   },
  // };
  // attributesRow.font = {
  //   name: "Arial",
  //   size: 9,
  //   bold: true,
  // };

  const cellTotalResponses = worksheet.getCell(attrHeadRow + 2, 1);
  cellTotalResponses.value = `Total number of responses: ${data.length}`;
  worksheet.getColumn(1).width = 89.38;
  cellTotalResponses.alignment = {
    horizontal: "right",
  };
  cellTotalResponses.fill = {
    type: "pattern",
    pattern: "solid",
  };
  cellTotalResponses.font = {
    name: "Arial",
    size: 10,
    bold: true,
    color: { argb: "FFFFFF" },
  };

  topics.forEach((topic) => {
    const topicTitle = worksheet.addRow([topic.title]);
    topicTitle.font = {
      name: "Arial",
      size: 14,
      bold: true,
      color: { argb: "00529F" },
    };

    topic.questions.forEach((question) => {
      const questionTitle = worksheet.addRow([question.title]);
      cellPathTopHash[question.id] = questionTitle.number;
      // questionTitle.
    });
    const avrRowData = [topic.title + " - AVERAGE"];

    const avrRow = worksheet.addRow(avrRowData);
    avrRow.font = {
      name: "Arial",
      size: 11,
      bold: true,
    };
    // console.log(topicTitle.number + 1, avrRow.number - 1);
    avrRow.getCell(1).alignment = {
      horizontal: "right",
    };
    avrRow.getCell(1).border = {
      left: {
        style: "thin",
      },
      right: {
        style: "thin",
      },
      top: {
        style: "thin",
      },
      bottom: {
        style: "thin",
      },
    };
    avrRow.getCell(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "BEBEBE" },
    };
    for (let key in cellPathLeftHash) {
      const columnNumber = cellPathLeftHash[key];
      const topCell = worksheet.getCell(topicTitle.number + 1, columnNumber);
      const bottomCell = worksheet.getCell(avrRow.number - 1, columnNumber);
      // console.log(topCell.fullAddress, bottomCell.fullAddress);
      const cellRange = `${topCell.fullAddress.address}:${bottomCell.address}`;
      avrRow.getCell(columnNumber).border = {
        left: {
          style: "thin",
        },
        right: {
          style: "thin",
        },
        top: {
          style: "thin",
        },
        bottom: {
          style: "thin",
        },
      };
      avrRow.getCell(columnNumber).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "BEBEBE" },
      };
      avrRow.getCell(columnNumber).alignment = { horizontal: "center" };
      avrRow.getCell(columnNumber).value = {
        // formula: `AVERAGE(${cellRange})`,
        formula: `IF(COUNT(${cellRange}),ROUND(AVERAGE(${cellRange}),0),"x")`,
      };
      // avrRow.getCell(columnNumber);
    }
  });



  data.forEach((surveyData) => {
    // const count = surveyData.survey.topic.reduce((acc, d) => acc + (d.answer ? 1 : 0));

    surveyData.survey.topic.forEach((ans) => {
      const top = cellPathTopHash[ans.questionId];
      surveyData.attributes.forEach((attr) => {
        const left = cellPathLeftHash[attr.optionId];
        const cell = worksheet.getCell(top, left);
        if (!ans.answer && !cell.value) {
          cell.value = "x";
        }
        if (ans.answer && cell.value === "x") {
          cell.value = 1;
        }
        if (ans.answer && cell.value !== "x") {
          cell.value = cell.value + 1;
        }

      });
    });
  });

  for(let key in cellPathTopHash) {
    const top = cellPathTopHash[key];
    for(let leftKey in cellPathLeftHash) {
      const left = cellPathLeftHash[leftKey];
      const cell = worksheet.getCell(top, left)
      if(!cell.value) {
        cell.value = 'x'
      }
      cell.alignment = { horizontal: "center" };

    }
  }

  // console.log(cellPathLeftHash, cellPathTopHash)

  /* const AllOptions = colData.attributes
    .map((attribute) =>
      attribute.options.map((option) => ({
        ...option,
        attributeId: attribute.id,
      }))
    )
    .flat();

  let titleCellStart = 2;
  topics.forEach((topic) => {
    const questionTitle = worksheet.addRow([topic.title]);
    questionTitle.font = {
      name: "Arial",
      size: 14,
      bold: true,
      color: { argb: "00529F" },
    };
    topic.questions.forEach((question) => {
      let titleId = undefined;
      const temp = AllOptions.map((option, idx) => {
        const titleCellId = worksheet.getCell(
          attrHeadRow,
          titleCellStart + idx
        ).name;

        titleCellId && (titleId = titleCellId);
        const optionCellId = worksheet.getCell(
          attrHeadRow + 1,
          titleCellStart + idx
        ).name;

        const respondedPeople = data.filter((personData) =>
          personData.attributes.some((personAttribute) => {
            return (
              personAttribute.attributeId === titleId &&
              personAttribute.optionId === optionCellId
            );
          })
        );

        let temp = 0;
        respondedPeople.forEach((person) => {
          const targetedPerson = person.survey.topic.find(
            (t) => t.topicId === topic.id && t.questionId === question.id
          );
          if (targetedPerson) {
            targetedPerson.answer && temp++;
          }
        });

        return temp;
      });

      const options = worksheet.addRow([question.title, ...temp]);
      options.font = {
        name: "Arial",
        size: 10,
      };
      options.alignment = {
        horizontal: "left",
        wrapText: true,
      };
    });
  }); */

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", "attachment; filename=" + "test1.xlsx");
  return workbook.xlsx.write(res).then(function () {
    res.status(200).end();
  });
};

const sheetRow = ({ question, answers }) => {
  const row = [[], [question], []];
  row.push(...answers.map((d) => [d]));
  return row;
};

const createExcel2 = (req, res) => {
  const workbook = new ExcelJS.Workbook();

  const commonCol = [data2.title];
  const subTitle = [data2.subTitle];

  data2.questions.forEach((val, i) => {
    const sheet = workbook.addWorksheet(`Q${i + 1}`);
    sheet.columns = commonCol;
    sheet.addRow(subTitle);
    sheet.addRows(sheetRow(val));
  });

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", "attachment; filename=" + "test2.xlsx");
  return workbook.xlsx.write(res).then(function () {
    res.status(200).end();
  });
};

module.exports = { createExcel1, createExcel2 };
