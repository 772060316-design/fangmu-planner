const foods = [
  { name: '生米', type: 'carb', inputMode: 'gram', cal: 346, protein: 7.4, carbs: 77.2, fat: 0.8, unit: '100g生重' },
  { name: '米饭', type: 'carb', inputMode: 'gram', cal: 116, protein: 2.6, carbs: 25.9, fat: 0.3, unit: '100g熟重 (180g=1碗)' },
  { name: '外卖盒饭', type: 'carb', inputMode: 'unit', cal: 605, protein: 10.8, carbs: 134.9, fat: 1.2, unit: '盒(362g)' },
  { name: '糙米饭团', type: 'carb', inputMode: 'gram', cal: 135, protein: 3.0, carbs: 28.0, fat: 1.2, unit: '100g' },
  { name: '玉米', aliases: ['带芯', '带芯玉米', '玉米带芯', '玉米棒', '玉米棒子'], type: 'carb', inputMode: 'gram', cal: 112, protein: 4.0, carbs: 22.0, fat: 1.2, unit: '100g可食熟重（约合带芯熟重167g）' },
  { name: '生面条', type: 'carb', inputMode: 'gram', cal: 348, protein: 10.0, carbs: 70.8, fat: 1.0, unit: '100g生重' },
  { name: '糙米', type: 'carb', inputMode: 'gram', cal: 348, protein: 7.7, carbs: 74.0, fat: 2.7, unit: '100g生重' },
  { name: '生燕麦', aliases: ['燕麦', '燕麦片'], type: 'carb', inputMode: 'gram', cal: 377, protein: 13.5, carbs: 66.9, fat: 6.7, unit: '100g' },
  { name: '全麦面包', aliases: ['全麦吐司', '吐司'], type: 'carb', inputMode: 'unit', cal: 124, protein: 5.0, carbs: 21.0, fat: 1.5, unit: '片(50g)' },
  { name: '粗粮馒头', aliases: ['馒头'], type: 'carb', inputMode: 'gram', cal: 223, protein: 7.0, carbs: 44.0, fat: 1.5, unit: '100g（约1个）' },
  { name: '米糊', type: 'carb', inputMode: 'unit', cal: 112, protein: 2.2, carbs: 25.0, fat: 0.3, unit: '勺(30g)' },
  { name: '欣善怡麦片', type: 'carb', inputMode: 'unit', cal: 62.3, protein: 2.17, carbs: 11.73, fat: 0.23, unit: '块(约17.5g)' },
  { name: '白面包', type: 'carb', inputMode: 'unit', cal: 113, protein: 3.6, carbs: 21.1, fat: 1.8, unit: '片' },
  { name: '全麦欧包', type: 'carb', inputMode: 'unit', cal: 140, protein: 8.9, carbs: 21.5, fat: 2.3, unit: '个(65g)' },
  { name: '哥本欧包', type: 'carb', inputMode: 'unit', cal: 140, protein: 8.9, carbs: 21.5, fat: 2.3, unit: '个(65g)' },
  { name: '香蕉', type: 'carb', inputMode: 'unit', cal: 87, protein: 1.1, carbs: 22.3, fat: 0.3, unit: '根' },
  { name: '红薯', type: 'carb', inputMode: 'gram', cal: 86, protein: 1.6, carbs: 20.1, fat: 0.1, unit: '100g' },
  { name: '南瓜', type: 'carb', inputMode: 'gram', cal: 26, protein: 1.0, carbs: 5.3, fat: 0.1, unit: '100g熟重' },
  { name: '山药', type: 'carb', inputMode: 'gram', cal: 57, protein: 1.9, carbs: 12.4, fat: 0.2, unit: '100g熟重' },
  { name: '芋头', type: 'carb', inputMode: 'gram', cal: 79, protein: 2.2, carbs: 18.1, fat: 0.2, unit: '100g熟重' },
  { name: '牛油果', type: 'fat', inputMode: 'unit', cal: 218, protein: 2.7, carbs: 11.8, fat: 20.0, unit: '个' },
  { name: '生鸡胸肉', type: 'protein', inputMode: 'gram', cal: 133, protein: 24.6, carbs: 0, fat: 3.1, unit: '100g生重' },
  { name: '鸡胸肉(熟,按克)', type: 'protein', inputMode: 'gram', cal: 165, protein: 31.0, carbs: 0, fat: 3.6, unit: '100g熟重' },
  { name: '鸡胸肉(熟)', type: 'protein', inputMode: 'unit', cal: 110, protein: 20.2, carbs: 4.9, fat: 1.1, unit: '袋(92g)' },
  { name: '生牛里脊', type: 'protein', inputMode: 'gram', cal: 179, protein: 28.1, carbs: 0, fat: 6.6, unit: '100g生重' },
  { name: '生牛肉', type: 'protein', inputMode: 'gram', cal: 116, protein: 21.2, carbs: 0, fat: 3.5, unit: '100g生重' },
  { name: '牛里脊(熟)', type: 'protein', inputMode: 'gram', cal: 170, protein: 29.0, carbs: 0, fat: 5.8, unit: '100g熟重' },
  { name: '卤牛肉', type: 'protein', inputMode: 'gram', cal: 170, protein: 29.0, carbs: 0, fat: 5.8, unit: '100g熟重' },
  { name: '生猪里脊', type: 'protein', inputMode: 'gram', cal: 120, protein: 21.0, carbs: 0, fat: 3.5, unit: '100g生重' },
  { name: '猪里脊(熟)', type: 'protein', inputMode: 'gram', cal: 143, protein: 25.0, carbs: 0, fat: 4.0, unit: '100g熟重' },
  { name: '生羊肉', type: 'protein', inputMode: 'gram', cal: 203, protein: 19.0, carbs: 0, fat: 14.0, unit: '100g生重' },
  { name: '生三文鱼', type: 'protein', inputMode: 'gram', cal: 179, protein: 19.8, carbs: 0, fat: 11.4, unit: '100g生重' },
  { name: '三文鱼(熟)', type: 'protein', inputMode: 'gram', cal: 206, protein: 20.0, carbs: 0, fat: 13.0, unit: '100g熟重' },
  { name: '生鳕鱼', type: 'protein', inputMode: 'gram', cal: 82, protein: 18.0, carbs: 0, fat: 0.7, unit: '100g生重' },
  { name: '生虾仁', type: 'protein', inputMode: 'gram', cal: 85, protein: 18.0, carbs: 0, fat: 0.9, unit: '100g生重' },
  { name: '虾仁(熟)', type: 'protein', inputMode: 'gram', cal: 99, protein: 21.0, carbs: 0, fat: 1.4, unit: '100g熟重' },
  { name: '生去皮鸡腿肉', type: 'protein', inputMode: 'gram', cal: 125, protein: 19.0, carbs: 0, fat: 5.0, unit: '100g生重' },
  { name: '生带皮鸡腿肉', type: 'protein', inputMode: 'gram', cal: 215, protein: 17.0, carbs: 0, fat: 16.0, unit: '100g生重' },
  { name: '去皮鸡腿', type: 'protein', inputMode: 'unit', cal: 138, protein: 21.0, carbs: 0, fat: 6.0, unit: '根', gramPerUnit: 120, weightFormat: '(带骨熟重 {g}g)' },
  { name: '速食鸡腿', type: 'protein', inputMode: 'unit', cal: 113, protein: 19.6, carbs: 1.2, fat: 3.5, unit: '只(75g)' },
  { name: '速食鸭腿', type: 'protein', inputMode: 'unit', cal: 250, protein: 35.6, carbs: 4.8, fat: 9.8, unit: '根' },
  { name: '全蛋(鸡蛋)', type: 'protein', inputMode: 'unit', cal: 72, protein: 6.5, carbs: 0.7, fat: 5.0, unit: '个' },
  { name: '蛋白', type: 'protein', inputMode: 'unit', cal: 17, protein: 3.6, carbs: 0.2, fat: 0.1, unit: '个' },
  { name: '乳清蛋白粉', type: 'protein', inputMode: 'unit', cal: 120, protein: 24.0, carbs: 3.0, fat: 1.5, unit: '勺(30g)' },
  { name: '袋鼠先生鸡胸肉', type: 'protein', inputMode: 'unit', cal: 49, protein: 9.4, carbs: 1.5, fat: 0.5, unit: '袋(50g)' },
  { name: '纯牛奶', type: 'protein', inputMode: 'unit', cal: 163, protein: 8.0, carbs: 12.5, fat: 8.8, unit: '瓶(250ml)' },
  { name: '纯牛奶(按ml)', type: 'protein', inputMode: 'gram', cal: 65, protein: 3.2, carbs: 5.0, fat: 3.5, unit: '100ml' },
  { name: '脱脂牛奶', type: 'protein', inputMode: 'unit', cal: 88, protein: 8.8, carbs: 12.5, fat: 0.3, unit: '瓶(250ml)' },
  { name: '脱脂牛奶(按ml)', type: 'protein', inputMode: 'gram', cal: 35, protein: 3.5, carbs: 5.0, fat: 0.1, unit: '100ml' },
  { name: '无糖拿铁', type: 'protein', inputMode: 'unit', cal: 88, protein: 8.8, carbs: 12.5, fat: 0.3, unit: '杯(250ml，按脱脂奶估算)' },
  { name: '橙C美式', type: 'carb', inputMode: 'unit', cal: 80, protein: 0.5, carbs: 18.0, fat: 0, unit: '杯' },
  { name: '豆浆(无糖)', type: 'protein', inputMode: 'unit', cal: 31, protein: 2.9, carbs: 1.2, fat: 1.6, unit: '杯(240ml)' },
  { name: '九阳豆浆粉', type: 'protein', inputMode: 'unit', cal: 90, protein: 8.0, carbs: 2.4, fat: 4.9, unit: '包(20g)' },
  { name: '无糖酸奶', type: 'protein', inputMode: 'gram', cal: 57, protein: 5.5, carbs: 5.0, fat: 1.5, unit: '100g' },
  { name: '无糖酸奶（100g袋装）', type: 'protein', inputMode: 'unit', cal: 57, protein: 5.5, carbs: 5.0, fat: 1.5, unit: '袋' },
  { name: '西兰花', type: 'veg', inputMode: 'gram', cal: 36, protein: 4.1, carbs: 4.3, fat: 0.6, unit: '100g' },
  { name: '菠菜', type: 'veg', inputMode: 'gram', cal: 28, protein: 2.6, carbs: 4.5, fat: 0.3, unit: '100g' },
  { name: '西葫芦', type: 'veg', inputMode: 'gram', cal: 19, protein: 0.8, carbs: 3.8, fat: 0.2, unit: '100g' },
  { name: '冬瓜', type: 'veg', inputMode: 'gram', cal: 12, protein: 0.4, carbs: 2.6, fat: 0.2, unit: '100g' },
  { name: '生菜', type: 'veg', inputMode: 'gram', cal: 16, protein: 1.3, carbs: 2.1, fat: 0.2, unit: '100g' },
  { name: '黄瓜', type: 'veg', inputMode: 'gram', cal: 16, protein: 0.8, carbs: 2.9, fat: 0.2, unit: '100g' },
  { name: '番茄', type: 'veg', inputMode: 'gram', cal: 20, protein: 0.9, carbs: 4.0, fat: 0.2, unit: '100g' },
  { name: '蔬菜', type: 'veg', inputMode: 'gram', cal: 24, protein: 1.8, carbs: 3.5, fat: 0.3, unit: '100g' },
  { name: '蔬菜任选A(西兰花/生菜/黄瓜)', type: 'veg', inputMode: 'gram', cal: 24, protein: 2.1, carbs: 3.1, fat: 0.3, unit: '100g' },
  { name: '蔬菜任选B(菠菜/番茄/青菜)', type: 'veg', inputMode: 'gram', cal: 24, protein: 1.8, carbs: 3.5, fat: 0.3, unit: '100g' },
  { name: '苹果', type: 'fruit', inputMode: 'unit', cal: 95, protein: 0.5, carbs: 25.0, fat: 0.3, unit: '个(约200g)' },
  { name: '蓝莓', type: 'fruit', inputMode: 'gram', cal: 57, protein: 0.7, carbs: 14.5, fat: 0.3, unit: '100g' },
  { name: '橙子', type: 'fruit', inputMode: 'unit', cal: 62, protein: 1.2, carbs: 15.4, fat: 0.2, unit: '个(约160g)' },
  { name: '豆腐', type: 'protein', inputMode: 'gram', cal: 84, protein: 6.6, carbs: 3.4, fat: 5.3, unit: '100g' },
  { name: '毛豆', type: 'protein', inputMode: 'gram', cal: 131, protein: 13.1, carbs: 10.5, fat: 5.0, unit: '100g' },
  { name: '杏仁', type: 'fat', inputMode: 'gram', cal: 578, protein: 21.3, carbs: 19.7, fat: 50.6, unit: '100g' },
  { name: '食用油 / 橄榄油', aliases: ['食用油', '橄榄油'], type: 'fat', inputMode: 'gram', cal: 900, protein: 0, carbs: 0, fat: 100, unit: '100g' },
]

const foodTagRules = [
  { test: /西兰花|菠菜|西葫芦|冬瓜|生菜|黄瓜|番茄|蔬菜|青菜/, tags: ['veg'] },
  { test: /香蕉|苹果|蓝莓|橙子|水果/, tags: ['fruit', 'fastCarb'] },
  { test: /牛奶|酸奶|拿铁/, tags: ['dairy'] },
  { test: /豆浆|豆腐|毛豆|杏仁|坚果/, tags: ['soyNut'] },
  { test: /糙米|燕麦|全麦|粗粮馒头|玉米|红薯|南瓜|山药|芋头|土豆|饭团/, tags: ['slowCarb'] },
  { test: /白面包|米饭|生米|米糊|生面条|橙C美式/, tags: ['fastCarb'] },
  { test: /牛肉|牛里脊|猪里脊|卤牛肉/, tags: ['redMeat'] },
  { test: /鸡胸|鸡腿|虾仁|鱼|三文鱼|乳清蛋白粉/, tags: ['whiteProtein'] },
  { test: /虾仁|鱼|三文鱼/, tags: ['fishShrimp'] },
]

const activityLevels = [
  { label: '3练', desc: '训练系数 ×1.375', factor: 1.375 },
  { label: '4练', desc: '训练系数 ×1.425', factor: 1.425 },
  { label: '5练', desc: '训练系数 ×1.50', factor: 1.50 },
]

const targetCalorieDeficit = 600
const goals = [
  { label: '减脂600卡', desc: '每日缺口600kcal', deficit: targetCalorieDeficit },
]

function cardioSessionsForBmi(bmi) {
  if (Number(bmi) > 28) return 5
  if (Number(bmi) >= 24) return 4
  return 3
}

const trainingAges = [
  { label: '两年以下', desc: '蛋白系数 1.6g/kg', factor: 1.6 },
  { label: '两年以上', desc: '蛋白系数 1.8g/kg', factor: 1.8 },
]

const mealCountOptions = [
  { label: '4餐', desc: '无睡前餐', count: 4 },
  { label: '5餐', desc: '有睡前餐', count: 5 },
]

const exerciseLib = {
  gym: {
    chest: [{ name: '杠铃卧推', reps: '8-12次', sets: 6 }, { name: '哑铃卧推', reps: '8-12次', sets: 5 }, { name: '史密斯平板卧推', reps: '8-12次', sets: 6 }, { name: '史密斯上斜推胸', reps: '8-12次', sets: 5 }, { name: '蝴蝶机夹胸', reps: '8-12次', sets: 5 }, { name: '绳索夹胸', reps: '8-12次', sets: 5 }],
    triceps: [{ name: '绳索下拉', reps: '8-12次', sets: 6 }, { name: '单边绳索下拉', reps: '8-12次', sets: 5 }, { name: '绳索下压', reps: '8-12次', sets: 5 }, { name: '哑铃颈后臂屈伸', reps: '8-12次', sets: 5 }],
    back: [{ name: '高位下拉', reps: '8-12次', sets: 6 }, { name: '悍马器械划船', reps: '8-12次', sets: 5 }, { name: '坐姿划船', reps: '8-12次', sets: 5 }, { name: '引体向上', reps: '8-12次', sets: 6 }, { name: '辅助引体', reps: '8-12次', sets: 6 }],
    biceps: [{ name: '杠铃弯举', reps: '8-12次', sets: 6 }, { name: '哑铃交替弯举', reps: '8-12次', sets: 5 }, { name: '哑铃锤式弯举', reps: '8-12次', sets: 5 }],
    shoulder: [{ name: '哑铃推肩', reps: '8-12次', sets: 6 }, { name: '史密斯推肩', reps: '8-12次', sets: 5 }, { name: '器械推肩', reps: '8-12次', sets: 5 }, { name: '哑铃侧平举', reps: '8-12次', sets: 5 }, { name: '龙门架侧平举', reps: '8-12次', sets: 5 }, { name: '哑铃坐姿飞鸟', reps: '8-12次', sets: 5 }],
    legs: [{ name: '深蹲', reps: '8-12次', sets: 6 }, { name: '史密斯深蹲', reps: '8-12次', sets: 5 }, { name: '坐姿腿举', reps: '8-12次', sets: 5 }, { name: '哈克深蹲', reps: '8-12次', sets: 5 }, { name: '俯卧腿弯举', reps: '8-12次', sets: 5 }],
    abs: [{ name: '平板支撑', reps: '30-60秒', sets: '2-3' }, { name: '摸膝卷腹', reps: '12次', sets: '3-4' }, { name: '仰卧抬腿', reps: '12次', sets: '3-4' }, { name: '俄罗斯转体', reps: '12次', sets: '3-4' }],
  },
  home: {
    chest: [{ name: '哑铃平板推胸', reps: '12次', sets: 4 }, { name: '上斜俯卧撑', reps: '12次', sets: 4 }, { name: '哑铃上斜推胸', reps: '12次', sets: 4 }, { name: '哑铃夹胸', reps: '12次', sets: 4 }],
    triceps: [{ name: '颈后三头臂屈伸', reps: '12次', sets: 4 }, { name: '板凳臂屈伸', reps: '12次', sets: 4 }],
    back: [{ name: '哑铃反手划船', reps: '12次', sets: 4 }, { name: '哑铃俯身划船', reps: '12次', sets: 4 }, { name: '哑铃单臂划船', reps: '12次', sets: 4 }],
    biceps: [{ name: '哑铃交替弯举', reps: '12次', sets: 4 }, { name: '哑铃锤式弯举', reps: '12次', sets: 5 }],
    shoulder: [{ name: '哑铃推肩', reps: '12次', sets: 4 }, { name: '哑铃前平举', reps: '12次', sets: 4 }, { name: '哑铃侧平举', reps: '12次', sets: 4 }, { name: '哑铃俯身飞鸟', reps: '12次', sets: 5 }],
    legs: [{ name: '高脚杯深蹲', reps: '12次', sets: 4 }, { name: '哑铃硬拉', reps: '12次', sets: 4 }, { name: '哑铃深蹲', reps: '12次', sets: 4 }, { name: '臀桥', reps: '12次', sets: 3 }],
    abs: [{ name: '平板支撑', reps: '30-60秒', sets: '2-3' }, { name: '摸膝卷腹', reps: '12次', sets: '3-4' }, { name: '仰卧抬腿', reps: '12次', sets: '3-4' }, { name: '俄罗斯转体', reps: '12次', sets: '3-4' }],
  },
}

const groupNames = { chest: '胸', triceps: '三头', back: '背', biceps: '二头', shoulder: '肩', legs: '腿', abs: '腹' }

const gymPlan = [
  { label: '胸 + 三头', groups: ['chest', 'triceps'], exercises: [{ name: '杠铃卧推', reps: '8-12次', sets: 6 }, { name: '哑铃上斜推胸', reps: '8-12次', sets: 5 }, { name: '蝴蝶机夹胸', reps: '8-12次', sets: 5 }, { name: '绳索下拉', reps: '8-12次', sets: 6 }] },
  { label: '背 + 二头', groups: ['back', 'biceps'], exercises: [{ name: '辅助引体', reps: '8-12次', sets: 6 }, { name: '高位下拉', reps: '8-12次', sets: 6 }, { name: '悍马器械划船', reps: '8-12次', sets: 5 }, { name: '哑铃交替弯举', reps: '8-12次', sets: 5 }] },
  { label: '肩', groups: ['shoulder'], exercises: [{ name: '哑铃推肩', reps: '8-12次', sets: 6 }, { name: '哑铃侧平举', reps: '8-12次', sets: 5 }, { name: '龙门架侧平举', reps: '8-12次', sets: 5 }, { name: '哑铃坐姿飞鸟', reps: '8-12次', sets: 5 }] },
  { label: '腿', groups: ['legs'], exercises: [{ name: '深蹲', reps: '8-12次', sets: 6 }, { name: '哈克深蹲', reps: '8-12次', sets: 5 }, { name: '坐姿腿举', reps: '8-12次', sets: 5 }] },
]

const homePlan = [
  { label: '胸 + 三头', groups: ['chest', 'triceps'], exercises: [{ name: '哑铃平板推胸', reps: '12次', sets: 4 }, { name: '哑铃夹胸', reps: '12次', sets: 4 }, { name: '哑铃上斜推胸', reps: '12次', sets: 4 }, { name: '颈后三头臂屈伸', reps: '12次', sets: 4 }] },
  { label: '背 + 二头', groups: ['back', 'biceps'], exercises: [{ name: '哑铃反手划船', reps: '12次', sets: 4 }, { name: '哑铃俯身划船', reps: '12次', sets: 4 }, { name: '哑铃单臂划船', reps: '12次', sets: 4 }, { name: '哑铃锤式弯举', reps: '12次', sets: 5 }] },
  { label: '肩', groups: ['shoulder'], exercises: [{ name: '哑铃推肩', reps: '12次', sets: 4 }, { name: '哑铃前平举', reps: '12次', sets: 4 }, { name: '哑铃侧平举', reps: '12次', sets: 4 }, { name: '哑铃俯身飞鸟', reps: '12次', sets: 5 }] },
  { label: '臀腿', groups: ['legs'], exercises: [{ name: '高脚杯深蹲', reps: '12次', sets: 4 }, { name: '哑铃硬拉', reps: '12次', sets: 4 }, { name: '哑铃深蹲', reps: '12次', sets: 4 }] },
]

const fixedFemaleHomePlan = [
  { label: '胸 + 三头', groups: ['chest', 'triceps'], exercises: [{ name: '哑铃平板推胸', reps: '12次', sets: 4 }, { name: '哑铃夹胸', reps: '12次', sets: 4 }, { name: '颈后三头臂屈伸', reps: '12次', sets: 4 }] },
  { label: '背 + 二头', groups: ['back', 'biceps'], exercises: [{ name: '哑铃反手划船', reps: '12次', sets: 4 }, { name: '哑铃俯身划船', reps: '12次', sets: 4 }, { name: '哑铃锤式弯举', reps: '12次', sets: 4 }] },
  { label: '肩', groups: ['shoulder'], exercises: [{ name: '哑铃推肩', reps: '12次', sets: 4 }, { name: '哑铃侧平举', reps: '12次', sets: 4 }, { name: '哑铃俯身飞鸟', reps: '12次', sets: 4 }] },
  { label: '臀腿', groups: ['legs'], exercises: [{ name: '高脚杯深蹲', reps: '12次', sets: 4 }, { name: '哑铃硬拉', reps: '12次', sets: 4 }, { name: '哑铃深蹲', reps: '12次', sets: 4 }] },
]

const trainTemplateVersion = 6

const fixedFemaleGymPlan = [
  { label: '胸 + 三头', groups: ['chest', 'triceps'], exercises: [{ name: '坐姿器械推胸', reps: '8-12次', sets: 5 }, { name: '史密斯上斜推胸', reps: '8-12次', sets: 5 }, { name: '蝴蝶机夹胸', reps: '8-12次', sets: 5 }, { name: '绳索下拉', reps: '8-12次', sets: 5 }] },
  { label: '背 + 二头', groups: ['back', 'biceps'], exercises: [{ name: '辅助引体', reps: '8-12次', sets: 6 }, { name: '高位下拉', reps: '8-12次', sets: 5 }, { name: '悍马器械划船', reps: '8-12次', sets: 4 }, { name: '哑铃交替弯举', reps: '8-12次', sets: 4 }] },
  { label: '肩', groups: ['shoulder'], exercises: [{ name: '哑铃推肩', reps: '8-12次', sets: 6 }, { name: '哑铃侧平举', reps: '8-12次', sets: 4 }, { name: '龙门架侧平举', reps: '8-12次', sets: 4 }, { name: '哑铃坐姿飞鸟', reps: '8-12次', sets: 4 }] },
  { label: '腿', groups: ['legs'], exercises: [{ name: '深蹲', reps: '8-12次', sets: 6 }, { name: '哈克深蹲', reps: '8-12次', sets: 4 }, { name: '坐姿腿举', reps: '8-12次', sets: 4 }] },
]

const stateStorageKey = 'fangmu-planner-state-v1'
const state = loadState()
const mealSearchTerms = {}

function defaultState() {
  return {
    activeTab: 'client',
    client: { gender: 'female', age: '', height: '', weight: '', activityIndex: 1, trainingAgeIndex: 0, goalIndex: 0, mealCountIndex: 0 },
    result: null,
    mealMode: 'gram',
    dietPreferences: { noWhey: false, selfCook: false },
    oilGrams: 0,
    oilDefaultVersion: 4,
    meals: emptyMeals(4),
    mealTemplateVersion: 23,
    cardioDefaultVersion: 2,
    trainTemplateVersion,
    savedMealPlan: null,
    train: buildTrainTemplate('gym', 'female'),
    reportMode: 'all',
    studentWechat: '',
  }
}

function normalizeState(raw) {
  const storedTrainTemplateVersion = raw?.trainTemplateVersion
  const next = raw ? { ...defaultState(), ...raw } : defaultState()
  next.client = { ...defaultState().client, ...(next.client || {}) }
  next.dietPreferences = { ...defaultState().dietPreferences, ...(next.dietPreferences || {}) }
  if (next.client.activityIndex >= activityLevels.length) next.client.activityIndex = 1
  if (next.client.trainingAgeIndex === undefined) next.client.trainingAgeIndex = 0
  if (next.client.trainingAgeIndex >= trainingAges.length) next.client.trainingAgeIndex = 0
  if (next.client.mealCountIndex === undefined) next.client.mealCountIndex = 0
  if (next.client.mealCountIndex >= mealCountOptions.length) next.client.mealCountIndex = 0
  if (next.client.goalIndex >= goals.length) next.client.goalIndex = 0
  if (!Array.isArray(next.meals) || next.meals.length !== getMealCount(next)) next.meals = emptyMeals(getMealCount(next))
  if (!next.savedMealPlan || !Array.isArray(next.savedMealPlan.meals)) next.savedMealPlan = null
  if (next.train && (!next.train.cardioType || next.train.cardioType === '快走/椭圆机')) next.train.cardioType = '爬坡/快走'
  if (next.cardioDefaultVersion !== 2) {
    next.train = { ...buildTrainTemplate(next.train.venue || 'gym', next.train.gender || next.client.gender), ...next.train }
    next.train.cardioPerWeek = 3
    next.train.cardioDuration = 30
    next.train.cardioType = '爬坡/快走'
    next.cardioDefaultVersion = 2
  }
  if (next.result) {
    next.result.selectedDeficit = targetCalorieDeficit
    next.train.cardioPerWeek = cardioSessionsForBmi(getClientBmiFromState(next))
  }
  if (storedTrainTemplateVersion !== trainTemplateVersion) {
    next.train = buildTrainTemplate(next.train?.venue || 'gym', next.train?.gender || next.client.gender)
    next.trainTemplateVersion = trainTemplateVersion
  }
  if (next.client.gender === 'female' && next.train) {
    const fixedTrain = buildTrainTemplate(next.train.venue || 'gym', 'female')
    next.train = {
      ...fixedTrain,
      cardioPerWeek: next.train.cardioPerWeek ?? fixedTrain.cardioPerWeek,
      cardioDuration: next.train.cardioDuration ?? fixedTrain.cardioDuration,
      cardioType: next.train.cardioType || fixedTrain.cardioType,
    }
  }
  const isUntouchedProfile = !next.result && !next.client.age && !next.client.height && !next.client.weight
  if (isUntouchedProfile) {
    next.client.gender = 'female'
    next.train = buildTrainTemplate('gym', 'female')
  }
  if (next.oilDefaultVersion !== 4) {
    next.oilGrams = 0
    next.savedMealPlan = null
    next.oilDefaultVersion = 4
  }
  // 方案页默认始终回到饮食/训练总览；导出时只临时切换到单页。
  next.reportMode = 'all'
  if (next.mealTemplateVersion !== 23) {
    if (!next.savedMealPlan) {
      next.meals = next.mealMode === 'gram'
        ? buildDefaultGramMeals(getMealCount(next), next.result, next.client.gender, next.dietPreferences)
        : emptyMeals(getMealCount(next))
      next.oilGrams = 0
    }
    next.mealTemplateVersion = 23
  }
  enforceFixedFemaleTemplate(next)
  return next
}

function loadState() {
  try {
    const saved = localStorage.getItem(stateStorageKey)
    return saved ? normalizeState(JSON.parse(saved)) : defaultState()
  } catch (error) {
    return defaultState()
  }
}

function saveState() {
  try {
    enforceFixedFemaleTemplate()
    localStorage.setItem(stateStorageKey, JSON.stringify(state))
  } catch (error) {
    // file:// pages or private browsing can disable local storage; the live state still works.
  }
}

function currentMealPlanSignature() {
  const client = state.client || {}
  const result = state.result || {}
  return JSON.stringify({
    gender: client.gender,
    age: client.age,
    height: client.height,
    weight: client.weight,
    activityIndex: client.activityIndex,
    trainingAgeIndex: client.trainingAgeIndex,
    goalIndex: client.goalIndex,
    mealCountIndex: client.mealCountIndex,
    mealMode: state.mealMode,
    noWhey: Boolean(state.dietPreferences && state.dietPreferences.noWhey),
    selfCook: Boolean(state.dietPreferences && state.dietPreferences.selfCook),
    targetCalories: result.targetCalories,
    protein: result.protein,
    carbs: result.carbs,
    fat: result.fat,
  })
}

function $(selector, root = document) { return root.querySelector(selector) }
function $all(selector, root = document) { return Array.from(root.querySelectorAll(selector)) }
function round1(value) { return Math.round(value * 10) / 10 }
function clampPct(value) { return Math.max(0, Math.min(100, value || 0)) }
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)) }
function roundTo10(value) { return Math.round(value / 10) * 10 }
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[s]))
}
function unique(list) { return Array.from(new Set(list.filter(Boolean))) }
function normalizedSearchText(value) {
  return String(value ?? '').toLowerCase().replace(/[\s()（）【】\[\]·,，、]/g, '')
}
function matchesFoodSearch(food, keyword) {
  const query = normalizedSearchText(keyword)
  if (!query) return true
  return [food.name, ...(food.aliases || [])]
    .map(normalizedSearchText)
    .some(name => name.includes(query))
}
function foodTags(name) {
  const food = foods.find(item => item.name === name)
  const direct = food && food.tags ? food.tags : []
  const inferred = foodTagRules.flatMap(rule => rule.test.test(name) ? rule.tags : [])
  return unique([...direct, ...inferred])
}
function itemHasTag(item, tag) {
  return foodTags(item.name).includes(tag)
}

function getMealCount(src = state) {
  const index = Number(src.client && src.client.mealCountIndex) || 0
  return (mealCountOptions[index] || mealCountOptions[0]).count
}

function getMealCountIndex(count) {
  return mealCountOptions.findIndex(option => option.count === count)
}

function formatForecastText(weight, pct, deficit) {
  if (!weight) return '--'
  const sign = deficit > 0 ? '-' : deficit < 0 ? '+' : ''
  return `${weight}kg (${sign}${pct}%)`
}

function getProteinRecommendation(weight) {
  const ageRule = trainingAges[state.client.trainingAgeIndex] || trainingAges[0]
  let factor = ageRule.factor
  const isFiveDay = Number(state.client.activityIndex) === 2
  const isOverTwoYears = Number(state.client.trainingAgeIndex) === 1
  if (isFiveDay && isOverTwoYears) factor = 2.0
  const raw = weight * factor
  const rounded = roundTo10(raw)
  const grams = clamp(rounded, 120, 180)
  const recommendedMealCount = grams / 4 > 40 ? 5 : 4
  const mealCount = getMealCount()
  const fourMealAvg = round1(grams / 4)
  const fiveMealAvg = round1(grams / 5)
  const sleepMealStatus = recommendedMealCount === 5 ? '有睡前餐' : '无睡前餐'
  const mealReason = recommendedMealCount === 5
    ? `4餐平均 ${fourMealAvg}g/餐，超过40g；5餐平均 ${fiveMealAvg}g/餐，用睡前餐分摊蛋白。`
    : `4餐平均 ${fourMealAvg}g/餐，落在30-40g区间；暂时不需要睡前餐。`
  return {
    grams,
    factor,
    raw: round1(raw),
    label: ageRule.label,
    mealCount,
    perMeal: round1(grams / mealCount),
    recommendedMealCount,
    fourMealAvg,
    fiveMealAvg,
    sleepMealStatus,
    mealReason,
  }
}

function syncMealResultFields(result) {
  if (!result || !result.protein) return result
  const fourMealAvg = round1(result.protein / 4)
  const fiveMealAvg = round1(result.protein / 5)
  const recommendedMealCount = fourMealAvg > 40 ? 5 : 4
  result.recommendedMealCount = recommendedMealCount
  result.fourMealAvg = fourMealAvg
  result.fiveMealAvg = fiveMealAvg
  result.sleepMealStatus = recommendedMealCount === 5 ? '有睡前餐' : '无睡前餐'
  result.mealReason = recommendedMealCount === 5
    ? `4餐平均 ${fourMealAvg}g/餐，超过40g；5餐平均 ${fiveMealAvg}g/餐，用睡前餐分摊蛋白。`
    : `4餐平均 ${fourMealAvg}g/餐，落在30-40g区间；暂时不需要睡前餐。`
  result.mealCount = getMealCount()
  result.proteinPerMeal = round1(result.protein / result.mealCount)
  return result
}

function emptyMeals(count = 5) {
  const meals = [
    { name: '早餐', icon: '🌅', items: [] },
    { name: '午餐', icon: '☀️', items: [] },
    { name: '练后餐', icon: '💪', items: [] },
    { name: '晚餐', icon: '🌙', items: [] },
  ]
  if (Number(count) === 5) meals.push({ name: '睡前餐', icon: '😴', items: [] })
  return meals
}

function buildFoodItem(food, amount) {
  if (food.inputMode === 'gram') {
    const ratio = amount / 100
    return {
      name: food.name, amount, unit: food.unit === '100ml' ? 'ml' : 'g',
      cal: Math.round(food.cal * ratio), protein: round1(food.protein * ratio), carbs: round1(food.carbs * ratio), fat: round1(food.fat * ratio),
    }
  }
  return {
    name: food.name, amount, unit: food.unit, weightDisplay: food.gramPerUnit && food.weightFormat ? food.weightFormat.replace('{g}', amount * food.gramPerUnit) : '',
    cal: round1(food.cal * amount), protein: round1(food.protein * amount), carbs: round1(food.carbs * amount), fat: round1(food.fat * amount),
  }
}

function isOilName(name) {
  return name === '食用油 / 橄榄油' || name === '食用油' || name === '橄榄油'
}

function buildOilItem(amount, name = '食用油 / 橄榄油') {
  return { name, amount, unit: 'g', cal: Math.round(amount * 9), protein: 0, carbs: 0, fat: amount }
}

function mainMealOilAmount(plan, client) {
  let activeClient = client
  if (!activeClient) {
    try {
      activeClient = state.client
    } catch (error) {
      activeClient = null
    }
  }
  const weight = Number((plan && plan.weight) || (activeClient && activeClient.weight)) || 0
  const targetCalories = Number(plan && plan.targetCalories) || 0
  const bigWeightLine = activeClient && activeClient.gender === 'female' ? 75 : 85
  return weight >= bigWeightLine || targetCalories >= 2600 ? 20 : 15
}

function cloneItems(items) {
  return JSON.parse(JSON.stringify(items || []))
}

function mainMealIndexes(meals = state.meals) {
  return {
    lunchIndex: meals.findIndex(meal => meal.name === '午餐'),
    dinnerIndex: meals.findIndex(meal => meal.name === '晚餐'),
  }
}

function totalsForMeals(meals) {
  const totals = { cal: 0, protein: 0, carbs: 0, fat: 0 }
  meals.forEach(meal => meal.items.forEach(item => {
    const macro = normalizedItemMacros(item, meal.name)
    totals.cal += macro.cal
    totals.protein += macro.protein
    totals.carbs += macro.carbs
    totals.fat += macro.fat
  }))
  totals.cal = Math.round(totals.cal)
  totals.protein = round1(totals.protein)
  totals.carbs = round1(totals.carbs)
  totals.fat = round1(totals.fat)
  return totals
}

function totalsForItems(items, mealName = '') {
  return totalsForMeals([{ name: mealName, items: items || [] }])
}

function normalizedItemMacros(item, mealName = '') {
  const base = {
    cal: Number(item && item.cal) || 0,
    protein: Number(item && item.protein) || 0,
    carbs: Number(item && item.carbs) || 0,
    fat: Number(item && item.fat) || 0,
  }
  if (!item || !isMainMealProtein(item) || !/午餐|晚餐/.test(mealName || '')) return base
  const amount = Number(item.amount) || 0
  const averageFatPer100 = /午餐/.test(mealName) ? 4.5 : 2.4
  const fat = round1(amount / 100 * averageFatPer100)
  return {
    protein: base.protein,
    carbs: base.carbs,
    fat,
    cal: Math.round(base.protein * 4 + base.carbs * 4 + fat * 9),
  }
}

function buildUnifiedMainMealItems(lunch, dinner, pick) {
  const sourceItems = [...((lunch && lunch.items) || []), ...((dinner && dinner.items) || [])]
  if (!sourceItems.length) return []
  const perMealTotals = totalsForItems(sourceItems)
  perMealTotals.cal = perMealTotals.cal / 2
  perMealTotals.protein = perMealTotals.protein / 2
  perMealTotals.carbs = perMealTotals.carbs / 2
  perMealTotals.fat = perMealTotals.fat / 2

  const vegAmount = averageMealQuantity(sourceItems, item => itemHasTag(item, 'veg')) || 150
  const carbAmount = clamp(roundTo10(perMealTotals.carbs / 20.1 * 100), 100, 700)
  const carbItem = buildFoodItem(pick('红薯'), carbAmount)
  const vegItem = buildFoodItem(pick('蔬菜'), Math.round(vegAmount))
  const proteinNeeded = Math.max(0, perMealTotals.protein - carbItem.protein - vegItem.protein)
  const chickenAmount = clamp(roundTo10(proteinNeeded / 24.6 * 100), 50, 260)
  const beefItem = buildFoodItem(pick('生牛肉'), chickenAmount)
  const existingOil = sourceItems.find(item => isOilName(item.name))
  const items = [carbItem, beefItem, vegItem]
  if (existingOil) items.push(buildOilItem(Math.max(0, Math.round(averageMealQuantity(sourceItems, item => isOilName(item.name)))), existingOil.name))
  return items
}

function syncMainMealsToSame(meals = state.meals) {
  const pick = name => foods.find(f => f.name === name)
  const { lunchIndex, dinnerIndex } = mainMealIndexes(meals)
  if (lunchIndex < 0 || dinnerIndex < 0) return
  const lunch = meals[lunchIndex]
  const dinner = meals[dinnerIndex]
  const same = JSON.stringify(lunch.items || []) === JSON.stringify(dinner.items || [])
  if (same) return
  const unified = buildUnifiedMainMealItems(lunch, dinner, pick)
  lunch.items = cloneItems(unified)
  dinner.items = cloneItems(unified)
}

function replaceMealItem(meal, name, item) {
  const idx = meal.items.findIndex(existing => existing.name === name)
  if (idx >= 0) meal.items[idx] = item
}

function upsertMealItem(meal, name, item) {
  const idx = meal.items.findIndex(existing => existing.name === name)
  if (idx >= 0) meal.items[idx] = item
  else meal.items.push(item)
}

function gramsForMacro(macroValue, macroPer100) {
  if (!macroValue || !macroPer100) return 0
  return roundTo10(macroValue / macroPer100 * 100)
}

function cornWithCobCookedWeight(edibleWeight) {
  if (!edibleWeight) return 0
  // 玉米营养按可食部分计算；食堂执行时展示为带芯熟重。
  return roundTo10(edibleWeight / 0.6)
}

function foodChoiceHint(item) {
  if (!item || !item.name) return ''
  const proteinChoices = [
    ['生鸡胸肉', 24.6],
    ['生牛肉', 21.2],
    ['生牛里脊', 28.1],
    ['生猪里脊', 21.0],
    ['生去皮鸡腿肉', 19.0],
    ['生虾仁', 18.0],
  ]
  const slowCarbChoices = [
    ['红薯', 20.1],
    ['玉米', 22.0],
    ['糙米饭团', 28.0],
    ['粗粮馒头', 44.0],
    ['生燕麦', 66.9],
  ]
  if (item.name === '蔬菜') {
    return '蔬菜组合：西兰花 / 菠菜 / 芦笋 / 洋葱 / 西葫芦 / 冬瓜，每餐150-200g。'
  }
  if (/红薯|玉米|糙米饭团|粗粮馒头|糙米/.test(item.name)) {
    const carbs = Number(item.carbs) || 0
    const swaps = slowCarbChoices
      .filter(([name]) => name !== item.name)
      .map(([name, carbsPer100]) => {
        const amount = gramsForMacro(carbs, carbsPer100)
        return name === '玉米' ? `玉米（带芯）约${cornWithCobCookedWeight(amount)}g熟重` : `${name}约${amount}g`
      })
      .join(' / ')
    return `慢碳互换：${swaps}，优先保证全天慢碳占比70%以上。`
  }
  if (/生鸡胸肉|生牛肉|生牛里脊|生猪里脊|生去皮鸡腿肉|生虾仁/.test(item.name)) {
    const protein = Number(item.protein) || 0
    const swaps = proteinChoices
      .filter(([name]) => name !== item.name)
      .map(([name, proteinPer100]) => `${name}约${gramsForMacro(protein, proteinPer100)}g`)
      .join(' / ')
    return `蛋白互换：${swaps}；熟重可先按生重×0.75估。`
  }
  if (item.name === '生带皮鸡腿肉') {
    return '脂肪补充型蛋白：适合脂肪不够时用；低脂日换去皮鸡腿/鸡胸/虾仁。'
  }
  if (/香蕉|苹果|蓝莓|橙子/.test(item.name)) {
    return '水果按具体种类计算碳水，不和“蔬菜”合并；苹果/香蕉按整颗整根，蓝莓按克。'
  }
  if (/纯牛奶|脱脂牛奶|无糖酸奶/.test(item.name)) {
    return '奶类用于补奶制品指标；脂肪不够优先纯牛奶，脂肪偏高用脱脂奶。'
  }
  if (item.name === '全蛋(鸡蛋)') {
    return '全蛋同时补蛋白和脂肪；脂肪偏低时优先加全蛋，不优先硬塞坚果。'
  }
  if (item.name === '杏仁') {
    return '坚果只做少量补充，通常5-15g即可；不靠大量坚果凑脂肪。'
  }
  if (isOilName(item.name)) {
    return '按实际添加量记录；外食时可改用上方的外食估计油脂，避免重复计算。'
  }
  return ''
}

function calculateMacroTargets(maintenanceCalories, protein, deficit, gender = state.client.gender) {
  const baseProtein = protein
  const proteinCal = baseProtein * 4
  const fatFloor = gender === 'female' ? 45 : 40
  const requestedTargetCalories = Math.max(0, Math.round(maintenanceCalories - deficit))
  const remainingCal = Math.max(0, requestedTargetCalories - proteinCal)
  const minFatCal = fatFloor * 9
  const plannedFatCal = remainingCal * 3 / 8
  const protectedFatCal = Math.max(minFatCal, plannedFatCal)
  const finalCarbCal = Math.max(0, remainingCal - protectedFatCal)
  const baseCarbs = Math.max(0, finalCarbCal / 4)
  const carbTransferToProtein = Math.round(baseCarbs * 0.1)
  const carbs = Math.max(0, Math.round(baseCarbs - carbTransferToProtein))
  protein = baseProtein + carbTransferToProtein
  const fat = Math.max(fatFloor, Math.round(protectedFatCal / 9))
  const calculatedMacroCalories = Math.round(protein * 4 + carbs * 4 + fat * 9)
  const targetCalories = requestedTargetCalories
  return { carbs, fat, protein, baseProtein, carbTransferToProtein, proteinCal: protein * 4, remainingCal, requestedTargetCalories, targetCalories, calculatedMacroCalories, selectedDeficit: deficit, fatFloor }
}

function buildMealProteinStatus(meal, targetProtein, mealCount) {
  const totals = totalsForItems(meal.items, meal.name)
  const share = mealCount ? Math.round(100 / mealCount) : 0
  if (!targetProtein) return { actual: totals.protein, target: 0, share, status: 'neutral', label: `蛋白 ${totals.protein}g` }
  const lowLine = targetProtein * 0.8
  const highLine = targetProtein * 1.25
  const status = totals.protein < lowLine ? 'low' : totals.protein > highLine ? 'high' : 'ok'
  return {
    actual: totals.protein,
    target: round1(targetProtein),
    share,
    status,
    label: `蛋白 ${totals.protein}/${round1(targetProtein)}g · ${share}%`,
  }
}

function defaultAmount(food, mealIndex) {
  if (food.inputMode === 'unit') return 1
  if (isOilName(food.name)) return 10
  if (food.name.includes('燕麦') && mealIndex === 0) return 60
  if (food.name === '生米') return 75
  if (food.name === '米饭') return 180
  if (food.name === '玉米' && mealIndex === 0) return 200
  if (food.name === '南瓜' && mealIndex === 0) return 200
  if ((food.name === '山药' || food.name === '芋头') && mealIndex === 0) return 150
  if (food.unit === '100ml') return 250
  return 100
}

function explicitOilGrams() {
  return state.meals.reduce((total, meal) => total + meal.items.reduce((subtotal, item) => {
    return subtotal + (isOilName(item.name) ? Number(item.amount) || 0 : 0)
  }, 0), 0)
}

function estimatedOilGrams() {
  return Math.max(0, Number(state.oilGrams) || 0)
}

function activeOilGrams() {
  const estimated = estimatedOilGrams()
  return estimated > 0 ? estimated : explicitOilGrams()
}

function mealTotals(includeOil = true) {
  const totals = { cal: 0, protein: 0, carbs: 0, fat: 0 }
  state.meals.forEach(meal => meal.items.forEach(item => {
    if (isOilName(item.name)) return
    const macro = normalizedItemMacros(item, meal.name)
    totals.cal += macro.cal
    totals.protein += macro.protein
    totals.carbs += macro.carbs
    totals.fat += macro.fat
  }))
  if (includeOil) {
    const oil = activeOilGrams()
    totals.cal += Math.round(oil * 9)
    totals.fat += oil
  }
  totals.protein = round1(totals.protein)
  totals.carbs = round1(totals.carbs)
  totals.fat = round1(totals.fat)
  totals.cal = Math.round(totals.cal)
  return totals
}

function itemQuantity(item) {
  const amount = Number(item.amount) || 0
  const unit = String(item.unit || '')
  if (unit === 'g' || unit === 'ml') return amount
  const match = unit.match(/约?(\d+(?:\.\d+)?)(g|ml)/i)
  if (match) return amount * Number(match[1])
  if (/瓶\(250ml\)/.test(unit)) return amount * 250
  if (/杯\(240ml\)/.test(unit)) return amount * 240
  if (/根/.test(unit) && item.name === '香蕉') return amount * 120
  return amount
}

function dietStats() {
  const stats = {
    veg: 0, fruit: 0, dairy: 0, soyNut: 0, oil: 0,
    slowCarb: 0, fastCarb: 0, foodNames: new Set(), postFat: 0,
    vegNames: new Set(), fruitNames: new Set(),
    redMeatMeals: 0, whiteProteinMeals: 0, postRedMeat: false, fishShrimpMeals: 0,
  }
  const estimatedOil = estimatedOilGrams()
  state.meals.forEach((meal, mealIndex) => {
    let mealHasRedMeat = false
    let mealHasWhiteProtein = false
    let mealHasFishShrimp = false
    meal.items.forEach(item => {
      const qty = itemQuantity(item)
      stats.foodNames.add(item.name)
      if (itemHasTag(item, 'veg')) {
        stats.veg += qty
        stats.vegNames.add(item.name === '蔬菜' ? '蔬菜组合' : item.name)
      }
      if (itemHasTag(item, 'fruit')) {
        stats.fruit += qty
        stats.fruitNames.add(item.name)
      }
      if (itemHasTag(item, 'dairy')) stats.dairy += qty
      if (itemHasTag(item, 'soyNut')) stats.soyNut += qty
      if (itemHasTag(item, 'slowCarb')) stats.slowCarb += Number(item.carbs) || 0
      if (itemHasTag(item, 'fastCarb')) stats.fastCarb += Number(item.carbs) || 0
      if (isOilName(item.name) && estimatedOil <= 0) stats.oil += qty
      if (meal.name.includes('练后')) stats.postFat += Number(item.fat) || 0
      if (itemHasTag(item, 'redMeat')) mealHasRedMeat = true
      if (itemHasTag(item, 'whiteProtein')) mealHasWhiteProtein = true
      if (itemHasTag(item, 'fishShrimp')) mealHasFishShrimp = true
    })
    if (mealHasRedMeat) stats.redMeatMeals += 1
    if (mealHasWhiteProtein) stats.whiteProteinMeals += 1
    if (mealHasFishShrimp) stats.fishShrimpMeals += 1
    if (meal.name.includes('练后') && mealHasRedMeat) stats.postRedMeat = true
  })
  if (estimatedOil > 0) stats.oil = estimatedOil
  return stats
}

const auditGroupDetails = {
  '膳食指南': [
    '为什么必须看：减脂餐不能只卡热量和蛋白。蔬菜、水果、奶类、全谷/大豆/坚果决定膳食纤维、钙、微量营养素和食物多样性，长期执行才不容易营养窄口。',
    '指南依据：蔬菜水果、全谷物和奶制品是平衡膳食的重要组成部分；膳食指南也强调食物多样、合理搭配。',
  ],
  '减脂执行': [
    '为什么必须看：这一行是方木减脂执行底线。慢碳比例、红白肉安排、练后低脂，是为了让血糖更稳、消化更轻、脂肪更可控，同时保住训练强度。',
    '指南依据：膳食指南强调谷类为主、吃动平衡、健康体重；这里把它转成更适合减脂交付的检测规则。',
  ],
}

function auditGroupDetail(title) {
  return (auditGroupDetails[title] || []).join('\n')
}

function buildDietAudit() {
  const stats = dietStats()
  const carbTotal = stats.slowCarb + stats.fastCarb
  const slowRatio = carbTotal ? stats.slowCarb / carbTotal : 0
  const vegVariety = stats.veg >= 300 && stats.vegNames.has('蔬菜组合') ? Math.max(3, stats.vegNames.size) : stats.vegNames.size
  const fruitVariety = stats.fruitNames.size
  return [
    {
      group: '膳食指南',
      label: '蔬菜',
      ok: stats.veg >= 300 && vegVariety >= 3,
      value: `${Math.round(stats.veg)}g/${vegVariety}种`,
      hint: '为什么设底线：蔬菜主要补膳食纤维、钾、镁、叶酸和植物化学物，也能提高饱腹感。减脂期如果蔬菜太少，容易靠主食和肉把餐盘填满。',
      source: '指南依据：餐餐有蔬菜，每天不少于300g，深色蔬菜占一半左右。',
    },
    {
      group: '膳食指南',
      label: '水果',
      ok: stats.fruit >= 200 && stats.fruit <= 350 && fruitVariety >= 2,
      value: `${Math.round(stats.fruit)}g/${fruitVariety}种`,
      hint: '为什么设范围：水果补维生素、矿物质和膳食纤维，但也带碳水。太少营养单一，太多会挤占主食和总热量。',
      source: '指南依据：每天200-350g新鲜水果，果汁不能代替鲜果。',
    },
    {
      group: '膳食指南',
      label: '奶类',
      ok: stats.dairy >= 300,
      value: `${Math.round(stats.dairy)}ml`,
      hint: '为什么设底线：奶类主要补钙和优质蛋白。减脂期吃得更干净时，如果没有奶类，钙摄入很容易被忽略。',
      source: '指南依据：奶制品摄入量相当于每天300ml以上液态奶。',
    },
    {
      group: '膳食指南',
      label: '豆/坚果',
      ok: stats.soyNut > 0,
      value: stats.soyNut ? '已添加' : '未添加',
      hint: '为什么设提醒：豆制品能补植物蛋白、矿物质和膳食纤维；坚果能补不饱和脂肪。减脂期不需要大量吃，有出现即可。',
      source: '指南依据：经常吃大豆制品，适量吃坚果。',
    },
    {
      group: '膳食指南',
      label: '烹调油',
      ok: stats.oil >= 25 && stats.oil <= 40,
      value: `${Math.round(stats.oil)}g`,
      hint: '为什么这样设：油是最容易无感超标的脂肪来源。外食/外卖按每餐12g、全天24g估计；自己做饭时再按餐内具体用油。',
      source: '指南依据：少盐少油，成人烹调油推荐25-30g；本工具把40g作为大基数执行上限。',
    },
    {
      group: '膳食指南',
      label: '多样性',
      ok: stats.foodNames.size >= 8,
      value: `${stats.foodNames.size}种`,
      hint: '为什么设底线：越单一越容易缺某些微量营养素，也更难长期坚持。一天先用8种作最低执行线，周维度再继续丰富。',
      source: '指南依据：平均每天12种以上食物，每周25种以上。',
    },
    {
      group: '减脂执行',
      label: '慢碳',
      ok: carbTotal ? slowRatio >= 0.7 : false,
      value: carbTotal ? `${Math.round(slowRatio * 100)}%` : '未添加',
      hint: '为什么设70%：不是说只能吃慢碳，而是减脂期大部分主食用燕麦、红薯、玉米、糙米这类更稳的来源，快碳留给训练前后或生活弹性。',
      source: '执行依据：膳食指南强调谷类为主、全谷物和薯类可替代部分主食；这里转成慢碳占比。',
    },
    {
      group: '减脂执行',
      label: '红白肉',
      ok: stats.whiteProteinMeals >= stats.redMeatMeals && !stats.postRedMeat,
      value: `白${stats.whiteProteinMeals}/红${stats.redMeatMeals}`,
      hint: '为什么这样排：红肉可以吃，但脂肪和消化负担通常更高；白肉、鱼虾更容易做成低脂高蛋白。默认白肉多一点，红肉放部分主餐。',
      source: '执行依据：畜禽鱼蛋奶都是优质蛋白来源；减脂模板把控脂和易执行放前面。',
    },
    {
      group: '减脂执行',
      label: '练后低脂',
      ok: stats.postFat <= 8,
      value: `${round1(stats.postFat)}g`,
      hint: '为什么设底线：练后餐优先解决蛋白和适量碳水，脂肪太高会让这一餐变重，也容易把全天脂肪挤爆。',
      source: '执行依据：这是训练营养规则，不是膳食指南原文；用于让练后餐更轻、更好执行。',
    },
  ]
}

function buildDietAuditGroups() {
  return buildDietAudit().reduce((groups, item) => {
    const existing = groups.find(group => group.title === item.group)
    if (existing) existing.items.push(item)
    else groups.push({ title: item.group, items: [item] })
    return groups
  }, [])
}

function topUpCaloriesIfNeeded(meals, plan, pick) {
  if (!plan || !plan.targetCalories) return
  const totals = totalsForMeals(meals)
  const gap = Math.round(plan.targetCalories - totals.cal)
  if (gap <= 100) return
  const lunch = meals.find(meal => meal.name === '午餐')
  const dinner = meals.find(meal => meal.name === '晚餐')
  if (!dinner) return
  const lunchBrownRice = lunch && (lunch.items.find(item => item.name === '糙米') || lunch.items.find(item => item.name === '米饭'))
  const dinnerRice = dinner.items.find(item => item.name === '生米') || dinner.items.find(item => item.name === '米饭')
  if (gap <= 160 || !lunchBrownRice) {
    const staple = dinnerRice
    const foodName = dinnerRice ? dinnerRice.name : '生米'
    const food = pick(foodName)
    const stapleCal = foodName === '生米' ? 346 : 116
    const minAmount = foodName === '生米' ? 40 : 150
    const maxAmount = foodName === '生米' ? 260 : 650
    const extraAmount = roundTo10(gap / stapleCal * 100)
    const nextAmount = clamp((staple ? Number(staple.amount) : 0) + extraAmount, minAmount, maxAmount)
    upsertMealItem(dinner, foodName, buildFoodItem(food, nextAmount))
    return
  }
  const lunchGap = gap * 0.45
  const dinnerGap = gap - lunchGap
  const lunchRiceName = lunchBrownRice.name
  const extraLunchRice = roundTo10(lunchGap / 348 * 100)
  upsertMealItem(lunch, lunchRiceName, buildFoodItem(pick(lunchRiceName), clamp(Number(lunchBrownRice.amount) + extraLunchRice, 40, 250)))
  const dinnerRiceName = dinnerRice ? dinnerRice.name : '生米'
  const dinnerRiceCal = dinnerRiceName === '生米' ? 346 : 116
  upsertMealItem(dinner, dinnerRiceName, buildFoodItem(pick(dinnerRiceName), clamp((dinnerRice ? Number(dinnerRice.amount) : 0) + roundTo10(dinnerGap / dinnerRiceCal * 100), dinnerRiceName === '生米' ? 40 : 150, dinnerRiceName === '生米' ? 260 : 650)))
}

function reduceCarbsFromStaples(meals, carbGrams, pick, options = {}) {
  let remaining = Math.max(0, carbGrams)
  const riceMin = options.riceMin ?? 100
  const sweetPotatoMin = options.sweetPotatoMin ?? 100
  const dinner = meals.find(meal => meal.name === '晚餐')
  const lunch = meals.find(meal => meal.name === '午餐')
  const reduce = (meal, name, carbsPer100, minAmount) => {
    if (!meal || remaining <= 0) return
    const item = meal.items.find(existing => existing.name === name)
    if (!item) return
    const currentAmount = Number(item.amount) || 0
    const maxReduceAmount = Math.max(0, currentAmount - minAmount)
    const reduceAmount = Math.min(maxReduceAmount, roundTo10(remaining / carbsPer100 * 100))
    if (reduceAmount <= 0) return
    const nextAmount = currentAmount - reduceAmount
    upsertMealItem(meal, name, buildFoodItem(pick(name), nextAmount))
    remaining = Math.max(0, remaining - reduceAmount * carbsPer100 / 100)
  }
  const dinnerRice = dinner && (dinner.items.find(item => item.name === '生米') || dinner.items.find(item => item.name === '米饭'))
  if (dinnerRice) reduce(dinner, dinnerRice.name, dinnerRice.name === '生米' ? 77.2 : 25.9, dinnerRice.name === '生米' ? 40 : riceMin)
  const lunchRice = lunch && (lunch.items.find(item => item.name === '糙米') || lunch.items.find(item => item.name === '米饭'))
  if (lunchRice) reduce(lunch, lunchRice.name, lunchRice.name === '糙米' ? 74.0 : 25.9, lunchRice.name === '糙米' ? (options.brownRiceMin ?? 40) : riceMin)
  reduce(lunch, '红薯', 20.1, sweetPotatoMin)
}

function addLeanProtein(meals, proteinGrams, pick) {
  let remaining = Math.max(0, proteinGrams)
  const lunch = meals.find(meal => meal.name === '午餐')
  if (lunch && remaining > 0) {
    const beef = lunch.items.find(item => item.name === '生牛肉')
    const currentAmount = beef ? Number(beef.amount) || 0 : 0
    const extraBeef = roundTo10(remaining / 21.2 * 100)
    const nextAmount = clamp(currentAmount + extraBeef, 80, 280)
    upsertMealItem(lunch, '生牛肉', buildFoodItem(pick('生牛肉'), nextAmount))
  }
}

function rebalanceProteinCarbsIfNeeded(meals, plan, pick) {
  if (!plan || !plan.protein || !plan.carbs) return
  const totals = totalsForMeals(meals)
  const proteinGap = round1(plan.protein - totals.protein)
  const carbOver = round1(totals.carbs - plan.carbs)
  const calorieGap = Math.round(plan.targetCalories - totals.cal)
  if (proteinGap <= 8) return
  if (carbOver <= 10) {
    if (calorieGap > 40) addLeanProtein(meals, proteinGap, pick)
    return
  }
  const swapGrams = Math.min(proteinGap, carbOver)
  reduceCarbsFromStaples(meals, swapGrams, pick)
  addLeanProtein(meals, proteinGap, pick)
}

function trimExcessCarbsIfNeeded(meals, plan, pick) {
  if (!plan || !plan.carbs || !plan.targetCalories) return
  let totals = totalsForMeals(meals)
  let carbOver = round1(totals.carbs - plan.carbs)
  const calOver = totals.cal - plan.targetCalories
  if (carbOver <= 15 && calOver <= 100) return
  const postMeal = meals.find(meal => meal.name.includes('练后'))
  if (postMeal && (carbOver > 20 || calOver > 80)) {
    const appleIndex = postMeal.items.findIndex(item => item.name === '苹果')
    if (appleIndex >= 0) {
      postMeal.items.splice(appleIndex, 1)
      totals = totalsForMeals(meals)
      carbOver = round1(totals.carbs - plan.carbs)
    }
  }
  if (carbOver > 10) {
    reduceCarbsFromStaples(meals, carbOver, pick, { riceMin: 80, sweetPotatoMin: 80 })
  }
  totals = totalsForMeals(meals)
  carbOver = round1(totals.carbs - plan.carbs)
  if (postMeal && carbOver > 20 && totals.cal - plan.targetCalories > 40) {
    const bananaIndex = postMeal.items.findIndex(item => item.name === '香蕉')
    if (bananaIndex >= 0) postMeal.items.splice(bananaIndex, 1)
  }
}

function buildDefaultGramMeals(count = getMealCount(), target = null, gender = 'female', preferences = {}) {
  const pick = name => foods.find(f => f.name === name)
  const plan = target || null
  const fixedFemaleDiet = gender === 'female'
  const noWhey = Boolean(preferences.noWhey)
  const selfCook = Boolean(preferences.selfCook)
  const lunchProteinName = fixedFemaleDiet ? '生猪里脊' : '生牛肉'
  const dinnerProteinName = fixedFemaleDiet ? '生鸡胸肉' : '生牛肉'
  const meals = emptyMeals(count)
  meals[0].items = [
    buildFoodItem(pick('生燕麦'), 40),
    buildFoodItem(pick('脱脂牛奶(按ml)'), 250),
    buildFoodItem(pick('全蛋(鸡蛋)'), 2),
    buildFoodItem(pick('蓝莓'), 60),
  ]
  meals[1].items = [
    buildFoodItem(pick('糙米'), 70),
    buildFoodItem(pick(lunchProteinName), 100),
    buildFoodItem(pick('蔬菜'), 150),
  ]
  meals[2].items = noWhey
    ? [buildFoodItem(pick('卤牛肉'), 50), buildFoodItem(pick('香蕉'), 1)]
    : [buildFoodItem(pick('乳清蛋白粉'), 1), buildFoodItem(pick('香蕉'), 1)]
  meals[3].items = [
    buildFoodItem(pick('生米'), 75),
    buildFoodItem(pick(dinnerProteinName), 100),
    buildFoodItem(pick('蔬菜'), 150),
  ]
  if (selfCook) {
    ;[meals[1], meals[3]].forEach(meal => meal.items.push(buildOilItem(12)))
  }
  if (meals[4]) meals[4].items = [buildFoodItem(pick('无糖酸奶'), 100), buildFoodItem(pick('杏仁'), 5)]
  if (plan && plan.protein && !fixedFemaleDiet) {
    const perMealProtein = plan.protein / count
    const lunchWithoutMeat = totalsForItems(meals[1].items.filter(item => item.name !== '生牛肉')).protein
    const lunchGrams = clamp(roundTo10((perMealProtein - lunchWithoutMeat) / 21.2 * 100), 80, 230)
    replaceMealItem(meals[1], '生牛肉', buildFoodItem(pick('生牛肉'), lunchGrams))

    if (!noWhey) {
      const postWithoutWhey = totalsForItems(meals[2].items.filter(item => item.name !== '乳清蛋白粉')).protein
      const postWhey = clamp(Math.round((perMealProtein - postWithoutWhey) / 24), 1, 1)
      replaceMealItem(meals[2], '乳清蛋白粉', buildFoodItem(pick('乳清蛋白粉'), postWhey))
    }

    const dinnerWithoutMeat = totalsForItems(meals[3].items.filter(item => item.name !== '生牛肉')).protein
    const dinnerGrams = clamp(roundTo10((perMealProtein - dinnerWithoutMeat) / 21.2 * 100), 70, 260)
    replaceMealItem(meals[3], '生牛肉', buildFoodItem(pick('生牛肉'), dinnerGrams))
  }
  if (plan && plan.carbs) {
    const current = totalsForMeals(meals)
    const carbGap = plan.carbs - current.carbs
    const lunchBrownRice = clamp(70 + Math.round((carbGap * 0.46 / 74.0) * 100 / 10) * 10, 40, 250)
    const dinnerRice = clamp(75 + Math.round((carbGap * 0.54 / 77.2) * 100 / 10) * 10, 40, 260)
    replaceMealItem(meals[1], '糙米', buildFoodItem(pick('糙米'), lunchBrownRice))
    replaceMealItem(meals[3], '生米', buildFoodItem(pick('生米'), dinnerRice))
    if (plan.protein && !fixedFemaleDiet) {
      const perMealProtein = plan.protein / count
      const lunchWithoutMeat = totalsForItems(meals[1].items.filter(item => item.name !== '生牛肉')).protein
      const lunchGrams = clamp(roundTo10((perMealProtein - lunchWithoutMeat) / 21.2 * 100), 50, 230)
      replaceMealItem(meals[1], '生牛肉', buildFoodItem(pick('生牛肉'), lunchGrams))
      const dinnerWithoutMeat = totalsForItems(meals[3].items.filter(item => item.name !== '生牛肉')).protein
      const dinnerGrams = clamp(roundTo10((perMealProtein - dinnerWithoutMeat) / 21.2 * 100), 50, 260)
      replaceMealItem(meals[3], '生牛肉', buildFoodItem(pick('生牛肉'), dinnerGrams))
    }
  }
  if (plan && plan.fat && !fixedFemaleDiet) {
    const afterOil = totalsForMeals(meals)
    const fatGap = plan.fat - afterOil.fat
    if (fatGap > 3 && meals[4]) {
      const currentAlmond = meals[4].items.find(item => item.name === '杏仁')
      const almondAmount = clamp(Math.round(((currentAlmond ? Number(currentAlmond.amount) : 0) + fatGap / 50.6 * 100) / 5) * 5, 5, 15)
      upsertMealItem(meals[4], '杏仁', buildFoodItem(pick('杏仁'), almondAmount))
    }
    let afterFatFoods = totalsForMeals(meals)
    if (plan.fat - afterFatFoods.fat > 8) {
      replaceMealItem(meals[0], '脱脂牛奶(按ml)', buildFoodItem(pick('纯牛奶(按ml)'), 300))
      afterFatFoods = totalsForMeals(meals)
    }
    if (plan.fat - afterFatFoods.fat > 5) {
      const currentEgg = meals[0].items.find(item => item.name === '全蛋(鸡蛋)')
      const eggAmount = clamp((currentEgg ? Number(currentEgg.amount) : 1) + 1, 1, 2)
      upsertMealItem(meals[0], '全蛋(鸡蛋)', buildFoodItem(pick('全蛋(鸡蛋)'), eggAmount))
      afterFatFoods = totalsForMeals(meals)
    }
    if (plan.fat - afterFatFoods.fat > 8) {
      const dinnerMeat = meals[3].items.find(item => item.name === '生牛肉')
      const dinnerAmount = dinnerMeat ? Number(dinnerMeat.amount) : 100
      replaceMealItem(meals[3], '生牛肉', buildFoodItem(pick('生带皮鸡腿肉'), dinnerAmount))
    }
  }
  if (!fixedFemaleDiet) {
    topUpCaloriesIfNeeded(meals, plan, pick)
    rebalanceProteinCarbsIfNeeded(meals, plan, pick)
    trimExcessCarbsIfNeeded(meals, plan, pick)
    rebalanceProteinCarbsIfNeeded(meals, plan, pick)
  }
  return meals
}

function resetMeals(options = {}) {
  const { jumpToMeal = false } = options
  if (!state.result || !state.result.protein) {
    const calculated = calculate()
    if (!calculated) return false
  }
  if (!state.result || !state.result.protein) {
    alert('请先填写客户数据并点击开始计算')
    return false
  }
  state.meals = buildDefaultGramMeals(getMealCount(), state.result, state.client.gender, state.dietPreferences)
  state.oilGrams = 0
  state.savedMealPlan = null
  state.mealTemplateVersion = 23
  saveState()
  renderMeal()
  renderReport()
  if (jumpToMeal) activateTab('meal')
  return true
}

function saveCurrentMealPlan() {
  if (!state.result || !state.result.protein) {
    alert('请先填写客户数据并点击开始计算')
    return false
  }
  state.savedMealPlan = {
    signature: currentMealPlanSignature(),
    meals: cloneItems(state.meals),
    oilGrams: state.oilGrams,
    mealMode: state.mealMode,
  }
  saveState()
  state.reportMode = 'all'
  renderReport()
  activateTab('report')
  alert('当前饮食已保存。之后从客户页生成饮食，会优先使用这份保存方案。')
  return true
}

function restoreSavedMealPlan(options = {}) {
  const saved = state.savedMealPlan
  if (!saved || saved.signature !== currentMealPlanSignature()) return false
  state.meals = cloneItems(saved.meals)
  state.oilGrams = Number(saved.oilGrams) || 0
  state.mealMode = saved.mealMode || state.mealMode
  saveState()
  renderMeal()
  renderReport()
  if (options.jumpToMeal) activateTab('meal')
  return true
}

function generateMealFromSavedOrDefault(options = {}) {
  const { jumpToMeal = false } = options
  if (!state.result || !state.result.protein) {
    const calculated = calculate()
    if (!calculated) return false
  }
  if (restoreSavedMealPlan({ jumpToMeal })) return true
  return resetMeals({ jumpToMeal })
}

function clearClientResultDisplay() {
  $('#targetCalories').textContent = '--'
  $('#bmr').textContent = '--'
  $('#tdee').textContent = '--'
  $('#deficit').textContent = '--'
  $('#carbs').textContent = '--g'
  $('#protein').textContent = '--g'
  $('#fat').textContent = '--g'
  $('#proteinNote').textContent = '先锁基础蛋白，剩余热量按碳水/脂肪 = 5:3 分；再将原碳水的10%等热量转给蛋白质。'
  renderMealStrategy({})
  $('#forecast1m').textContent = '--'
  $('#forecast3m').textContent = '--'
}

function invalidateResult(options = {}) {
  state.result = null
  saveState()
  if (options.render === false) clearClientResultDisplay()
  else renderAll()
}

function buildTrainTemplate(venue, gender) {
  const base = gender === 'female'
    ? (venue === 'home' ? fixedFemaleHomePlan : fixedFemaleGymPlan)
    : (venue === 'home' ? homePlan : gymPlan)
  const days = base.map(day => ({
    label: day.label,
    groups: [...day.groups],
    exercises: day.exercises.map(ex => ({ ...ex })),
  }))
  return { venue, gender, days, cardioPerWeek: 3, cardioDuration: 30, cardioType: '爬坡/快走' }
}

function enforceFixedFemaleTemplate(target = state) {
  if (!target?.train) return
  const isFemale = target.client?.gender === 'female' || target.train.gender === 'female'
  if (!isFemale) return

  const current = target.train
  const venue = current.venue === 'home' ? 'home' : 'gym'
  const fixed = buildTrainTemplate(venue, 'female')
  target.client.gender = 'female'
  target.train = {
    ...fixed,
    cardioPerWeek: current.cardioPerWeek ?? fixed.cardioPerWeek,
    cardioDuration: current.cardioDuration ?? fixed.cardioDuration,
    cardioType: current.cardioType || fixed.cardioType,
  }
  target.trainTemplateVersion = trainTemplateVersion
}

function renderChoices() {
  renderChoiceGroup('#activityChoices', activityLevels, state.client.activityIndex, idx => {
    state.client.activityIndex = idx
    invalidateResult()
  })
  renderChoiceGroup('#trainingAgeChoices', trainingAges, state.client.trainingAgeIndex, idx => {
    state.client.trainingAgeIndex = idx
    invalidateResult()
  })
  renderChoiceGroup('#mealCountChoices', mealCountOptions, state.client.mealCountIndex, idx => {
    state.client.mealCountIndex = idx
    if (state.result && state.result.protein) {
      state.result.mealCount = getMealCount()
      state.result.proteinPerMeal = round1(state.result.protein / state.result.mealCount)
    }
    saveState()
    renderAll()
  })
  const activitySummary = $('#activitySummary')
  if (activitySummary) activitySummary.textContent = activityLevels[state.client.activityIndex].desc
  const trainingAgeSummary = $('#trainingAgeSummary')
  if (trainingAgeSummary) trainingAgeSummary.textContent = trainingAges[state.client.trainingAgeIndex].desc
  const goalSummary = $('#goalSummary')
  if (goalSummary) {
    goalSummary.textContent = `统一设置：每日减脂 ${targetCalorieDeficit} kcal`
  }
}

function renderChoiceGroup(selector, items, activeIndex, onPick) {
  const root = $(selector)
  root.innerHTML = items.map((item, idx) => `
    <button class="choice ${idx === Number(activeIndex) ? 'active' : ''}" data-index="${idx}">
      <strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.desc || ('x' + item.factor))}</span>
    </button>
  `).join('')
  $all('button', root).forEach(btn => btn.addEventListener('click', () => onPick(Number(btn.dataset.index))))
}

function renderClient() {
  $('#age').value = state.client.age || ''
  $('#height').value = state.client.height || ''
  $('#weight').value = state.client.weight || ''
  setSegmented('gender', state.client.gender)
  setSegmented('mealMode', state.mealMode)
  renderChoices()
  const result = syncMealResultFields(state.result || {})
  $('#targetCalories').textContent = result.targetCalories || '--'
  $('#bmr').textContent = result.bmr || '--'
  $('#tdee').textContent = result.tdee || '--'
  $('#deficit').textContent = result.deficit ?? '--'
  $('#carbs').textContent = result.carbs ? result.carbs + 'g' : '--g'
  $('#protein').textContent = result.protein ? result.protein + 'g' : '--g'
  $('#fat').textContent = result.fat ? result.fat + 'g' : '--g'
  $('#proteinNote').textContent = result.protein
    ? `目标热量 ${result.targetCalories}kcal；基础蛋白锁定后，剩余热量按碳水/脂肪 = 5:3 分，再将原碳水的10%等热量转给蛋白质。`
    : '先锁基础蛋白，剩余热量按碳水/脂肪 = 5:3 分；再将原碳水的10%等热量转给蛋白质。'
  renderMealStrategy(result)
  $('#forecast1m').textContent = result.forecast1m ? formatForecastText(result.forecast1m, result.pct1m, result.deficit) : '--'
  $('#forecast3m').textContent = result.forecast3m ? formatForecastText(result.forecast3m, result.pct3m, result.deficit) : '--'
}

function renderMealStrategy(result) {
  const box = $('#mealStrategy')
  if (!box) return
  const title = $('strong', box)
  const desc = $('p', box)
  if (!result.protein) {
    title.textContent = '先计算'
    desc.textContent = '算出蛋白后，再判断是否需要睡前餐。'
    return
  }
  const isUsingRecommended = Number(result.mealCount) === Number(result.recommendedMealCount)
  title.textContent = `${result.sleepMealStatus} · 当前${result.mealCount}餐`
  desc.textContent = `${result.mealReason}${isUsingRecommended ? '' : ` 当前是手动${result.mealCount}餐，每餐约${result.proteinPerMeal}g。`}`
}

function calculate() {
  const a = parseInt(state.client.age)
  const h = parseFloat(state.client.height)
  const w = parseFloat(state.client.weight)
  if (!a || a <= 0 || a > 120) {
    alert('请输入正确的年龄')
    return false
  }
  if (!h || h <= 0 || h > 250) {
    alert('请输入正确的身高')
    return false
  }
  if (!w || w <= 0 || w > 500) {
    alert('请输入正确的体重')
    return false
  }
  const bmr = state.client.gender === 'male' ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161
  const tdee = bmr * activityLevels[state.client.activityIndex].factor
  const bmi = round1(w / ((h / 100) ** 2))
  const goalDeficit = targetCalorieDeficit
  state.client.goalIndex = 0
  state.train.cardioPerWeek = cardioSessionsForBmi(bmi)
  const proteinPlan = getProteinRecommendation(w)
  const macroTargets = calculateMacroTargets(tdee, proteinPlan.grams, goalDeficit, state.client.gender)
  const protein = macroTargets.protein
  proteinPlan.grams = protein
  proteinPlan.recommendedMealCount = protein / 4 > 40 ? 5 : 4
  proteinPlan.fourMealAvg = round1(protein / 4)
  proteinPlan.fiveMealAvg = round1(protein / 5)
  proteinPlan.sleepMealStatus = proteinPlan.recommendedMealCount === 5 ? '有睡前餐' : '无睡前餐'
  proteinPlan.mealReason = proteinPlan.recommendedMealCount === 5
    ? `4餐平均 ${proteinPlan.fourMealAvg}g/餐，超过40g；5餐平均 ${proteinPlan.fiveMealAvg}g/餐，用睡前餐分摊蛋白。`
    : `4餐平均 ${proteinPlan.fourMealAvg}g/餐，落在30-40g区间；暂时不需要睡前餐。`
  const nextMealCountIndex = getMealCountIndex(proteinPlan.recommendedMealCount)
  if (nextMealCountIndex >= 0 && Number(state.client.mealCountIndex) !== nextMealCountIndex) {
    state.client.mealCountIndex = nextMealCountIndex
  }
  const selectedMealCount = getMealCount()
  proteinPlan.mealCount = selectedMealCount
  proteinPlan.perMeal = round1(protein / selectedMealCount)
  const targetCalories = macroTargets.targetCalories
  const carbs = macroTargets.carbs
  const fat = macroTargets.fat
  const actualDeficit = Math.round(tdee - targetCalories)
  const dailyChangeKg = actualDeficit / 7700
  const forecast1m = round1(w - dailyChangeKg * 30)
  const forecast3m = round1(w - dailyChangeKg * 90)
  state.result = {
    bmr: Math.round(bmr), tdee: Math.round(tdee), targetCalories: Math.round(targetCalories),
    deficit: actualDeficit, carbs, protein, fat,
    requestedTargetCalories: macroTargets.requestedTargetCalories,
    selectedDeficit: macroTargets.selectedDeficit,
    fatFloor: macroTargets.fatFloor,
    weight: w,
    proteinFactor: proteinPlan.factor,
    proteinRule: proteinPlan.label,
    proteinRaw: proteinPlan.raw,
    mealCount: proteinPlan.mealCount,
    proteinPerMeal: proteinPlan.perMeal,
    recommendedMealCount: proteinPlan.recommendedMealCount,
    fourMealAvg: proteinPlan.fourMealAvg,
    fiveMealAvg: proteinPlan.fiveMealAvg,
    sleepMealStatus: proteinPlan.sleepMealStatus,
    mealReason: proteinPlan.mealReason,
    forecast1m,
    forecast3m,
    pct1m: round1(Math.abs(forecast1m - w) / w * 100),
    pct3m: round1(Math.abs(forecast3m - w) / w * 100),
  }
  state.train.gender = state.client.gender
  saveState()
  renderAll()
  return true
}

function setSegmented(name, value) {
  $all(`.segmented[data-bind="${name}"]`).forEach(root => {
    $all('button', root).forEach(btn => btn.classList.toggle('active', btn.dataset.value === value))
  })
}

function renderMeal() {
  $('#mealTarget').textContent = state.result ? state.result.targetCalories + ' kcal' : '请先计算'
  $('#oilGrams').value = state.oilGrams || ''
  $('#oilField').style.display = 'flex'
  const estimatedOil = estimatedOilGrams()
  setSegmented('mealMode', state.mealMode)

  const totals = mealTotals()
  const target = state.result || { targetCalories: 0, carbs: 0, protein: 0, fat: 0 }
  $('#mealTotal').textContent = `已配 ${totals.cal} kcal`
  $('#calProgress').style.width = clampPct(target.targetCalories ? totals.cal / target.targetCalories * 100 : 0) + '%'
  setMacroProgress('carb', totals.carbs, target.carbs)
  setMacroProgress('protein', totals.protein, target.protein)
  setMacroProgress('fat', totals.fat, target.fat)
  renderDietAudit()

  const mealList = $('#mealList')
  const explicitOil = explicitOilGrams()
  if (estimatedOil > 0) {
    $('#oilHint').textContent = `已按顶部 ${estimatedOil}g/天计算，餐内具体用油不再重复计入。`
  } else if (explicitOil > 0) {
    $('#oilHint').textContent = `顶部未预设外食油脂，但当前餐内已有 ${explicitOil}g 食用油 / 橄榄油；重新生成默认饮食可清除旧油脂。`
  } else {
    $('#oilHint').textContent = '当前未预设油脂；需要时在餐内搜索“食用油 / 橄榄油”后自行添加。'
  }
  const { lunchIndex, dinnerIndex } = mainMealIndexes()
  mealList.innerHTML = state.meals.map((meal, mealIndex) => {
    const mealKey = String(mealIndex)
    const mealName = meal.name
    const mealTitle = `<span>${meal.icon} ${escapeHtml(meal.name)}</span>`
    const mealMacro = totalsForItems(meal.items, meal.name)
    const mt = mealMacro.cal
    const proteinStatus = buildMealProteinStatus(meal, target.protein ? target.protein / getMealCount() : 0, getMealCount())
    const copyBtn = mealIndex === lunchIndex && dinnerIndex >= 0 && meal.items.length
      ? `<button class="ghost-btn copy-meal-btn" data-copy-from="${mealIndex}" data-copy-to="${dinnerIndex}">复制到晚餐</button>`
      : mealIndex === dinnerIndex && lunchIndex >= 0 && meal.items.length
        ? `<button class="ghost-btn copy-meal-btn" data-copy-from="${mealIndex}" data-copy-to="${lunchIndex}">复制到午餐</button>`
        : ''
    const visibleItems = meal.items
      .map((item, itemIndex) => ({ item, itemIndex }))
      .filter(({ item }) => !(estimatedOilGrams() > 0 && isOilName(item.name)))
    const rows = visibleItems.length ? visibleItems.map(({ item, itemIndex }) => {
      const isProteinSlot = isMainMealProtein(item) && /午餐|晚餐/.test(meal.name)
      const title = isProteinSlot ? '蛋白质' : item.name === '蔬菜' ? '西兰花 / 菠菜 / 芦笋 / 洋葱 / 西葫芦 / 冬瓜' : item.name
      const choiceGrid = isProteinSlot ? reportProteinChoiceGrid(item, meal) : breakfastSlowCarbChoiceGrid(item, meal, mealIndex)
      const amountText = isProteinSlot ? `当前计算量 ${item.amount}${item.unit}` : `${item.amount}${item.unit} ${item.weightDisplay || ''}`
      const macro = normalizedItemMacros(item, meal.name)
      return `
      <div class="item-row">
        <div class="item-main">
          <strong>${escapeHtml(title)}</strong>
          <small>${escapeHtml(amountText)} · ${escapeHtml(macro.cal)}kcal · 碳${escapeHtml(macro.carbs)} 蛋${escapeHtml(macro.protein)} 脂${escapeHtml(macro.fat)}</small>
          ${choiceGrid}
        </div>
        <input class="mini-input" type="number" min="0" step="1" value="${escapeHtml(item.amount)}" data-meal="${mealKey}" data-item="${itemIndex}">
        <button class="icon-btn" data-remove-meal="${mealKey}" data-remove-item="${itemIndex}" title="删除">×</button>
      </div>
    `
    }).join('') : '<div class="empty">搜索添加食物</div>'
    return `<section class="panel meal-card ${proteinStatus.status}">
      <h3>
        ${mealTitle}
        <span class="meal-card-actions">${copyBtn}<span class="protein-badge ${proteinStatus.status}">${escapeHtml(proteinStatus.label)}</span><span class="meal-total">${mt} kcal</span></span>
      </h3>
      ${rows}
      <div class="meal-add-box">
        <input class="meal-food-search" type="search" placeholder="添加食物到${escapeHtml(mealName)}" value="${escapeHtml(mealSearchTerms[mealKey] || '')}" data-meal-search="${mealKey}">
        <div class="meal-food-results" data-meal-results="${mealKey}"></div>
      </div>
    </section>`
  }).join('')

  $all('.mini-input', mealList).forEach(input => input.addEventListener('change', () => {
    const mealKey = input.dataset.meal
    if (mealKey === 'main') updateMainMealAmount(Number(input.dataset.item), Number(input.value))
    else updateMealAmount(Number(mealKey), Number(input.dataset.item), Number(input.value))
  }))
  $all('[data-remove-meal]', mealList).forEach(btn => btn.addEventListener('click', () => {
    const mealKey = btn.dataset.removeMeal
    if (mealKey === 'main') removeMainMealItem(Number(btn.dataset.removeItem))
    else removeMealItem(Number(mealKey), Number(btn.dataset.removeItem))
  }))
  $all('[data-copy-from]', mealList).forEach(btn => {
    btn.addEventListener('click', () => copyMeal(Number(btn.dataset.copyFrom), Number(btn.dataset.copyTo)))
  })
  $all('[data-breakfast-carb]', mealList).forEach(btn => {
    btn.addEventListener('click', () => replaceBreakfastCarb(
      Number(btn.dataset.breakfastMeal),
      btn.dataset.breakfastCarb,
      Number(btn.dataset.breakfastAmount),
    ))
  })
  $all('[data-meal-search]', mealList).forEach(input => {
    const mealIndex = input.dataset.mealSearch
    renderInlineFoodResults(mealIndex, input.value)
    input.addEventListener('input', () => {
      mealSearchTerms[mealIndex] = input.value
      renderInlineFoodResults(mealIndex, input.value)
    })
  })
}

function renderDietAudit() {
  const root = $('#dietAuditGrid')
  if (!root) return
  root.innerHTML = buildDietAuditGroups().map(group => `
    <section class="audit-section">
      <div class="audit-section-title" tabindex="0" data-detail="${escapeHtml(auditGroupDetail(group.title))}">${escapeHtml(group.title)}</div>
      <div class="audit-section-grid">
        ${group.items.map(item => {
          const fullHint = [item.hint, item.source].filter(Boolean).join('\n')
          return `
          <div class="audit-chip ${item.ok ? 'ok' : 'warn'}" tabindex="0" data-detail="${escapeHtml(fullHint)}">
            <strong>${escapeHtml(item.label)}</strong>
            <span>${escapeHtml(item.value)}</span>
            <small>${escapeHtml(fullHint)}</small>
          </div>
        `}).join('')}
      </div>
    </section>
  `).join('')
}

function setMacroProgress(name, value, target) {
  const text = $(`#${name}ProgressText`)
  if (text) text.textContent = `${value}/${target || 0}g`
  const bar = $(`#${name}MacroBar`)
  if (bar) bar.style.width = clampPct(target ? value / target * 100 : 0) + '%'
}

function renderInlineFoodResults(mealIndex, keyword) {
  const root = $(`[data-meal-results="${mealIndex}"]`)
  if (!root) return
  const clean = (keyword || '').trim().toLowerCase()
  if (!clean) {
    root.innerHTML = ''
    return
  }
  const list = foods.filter(food => matchesFoodSearch(food, clean)).slice(0, 8)
  root.innerHTML = list.length ? list.map(food => `
    <button class="inline-food-option" data-inline-food="${escapeHtml(food.name)}" data-inline-meal="${mealIndex}">
      <span>${escapeHtml(food.name)}</span>
      <small>${escapeHtml(food.cal)}kcal / ${escapeHtml(food.unit)}</small>
      <b>+</b>
    </button>
  `).join('') : '<div class="empty compact-empty">没有匹配食物</div>'
  $all('[data-inline-food]', root).forEach(btn => btn.addEventListener('click', () => {
    mealSearchTerms[mealIndex] = ''
    addFoodToMeal(btn.dataset.inlineFood, btn.dataset.inlineMeal)
  }))
}

function renderFoodList() {
  if (!$('#foodSearch') || !$('#foodList')) return
  const keyword = ($('#foodSearch').value || '').trim().toLowerCase()
  if (!keyword) {
    $('#foodList').innerHTML = '<div class="empty compact-empty">输入食物名称后显示可添加项</div>'
    return
  }
  const list = foods.filter(food => matchesFoodSearch(food, keyword))
  const groups = [
    ['碳水来源', list.filter(f => f.type === 'carb')],
    ['蛋白质来源', list.filter(f => f.type === 'protein')],
    ['蔬菜水果', list.filter(f => f.type === 'veg' || f.type === 'fruit')],
    ['健康脂肪', list.filter(f => f.type === 'fat')],
  ]
  $('#foodList').innerHTML = list.length ? groups.map(([label, items]) => items.length ? `
    <div class="section-label">${label}</div>
    ${items.map(food => `
      <div class="food-option">
        <div><strong>${escapeHtml(food.name)}</strong><small>${escapeHtml(food.cal)}kcal / ${escapeHtml(food.unit)} · 碳${escapeHtml(food.carbs)} 蛋${escapeHtml(food.protein)} 脂${escapeHtml(food.fat)}</small></div>
        <button class="round-add" data-food="${escapeHtml(food.name)}">+</button>
      </div>
    `).join('')}
  ` : '').join('') : '<div class="empty compact-empty">没有匹配食物，先换个关键词</div>'
  $all('[data-food]').forEach(btn => btn.addEventListener('click', () => addFood(btn.dataset.food)))
}

function addFood(name) {
  const food = foods.find(f => f.name === name)
  const mealIndex = Number($('#targetMealSelect') ? $('#targetMealSelect').value : 0)
  addFoodToMeal(name, mealIndex)
}

function addFoodToMeal(name, mealIndex) {
  const food = foods.find(f => f.name === name)
  if (String(mealIndex) === 'main') {
    const { lunchIndex, dinnerIndex } = mainMealIndexes()
    if (!food || lunchIndex < 0 || dinnerIndex < 0) return
    const amount = defaultAmount(food, lunchIndex)
    state.meals[lunchIndex].items.push(buildFoodItem(food, amount))
    state.meals[dinnerIndex].items = cloneItems(state.meals[lunchIndex].items)
    saveState()
    renderMeal()
    renderReport()
    return
  }
  if (!food || !state.meals[mealIndex]) return
  const amount = defaultAmount(food, mealIndex)
  state.meals[mealIndex].items.push(buildFoodItem(food, amount))
  saveState()
  renderMeal()
  renderReport()
}

function replaceBreakfastCarb(mealIndex, foodName, amount) {
  const meal = state.meals[mealIndex]
  const food = foods.find(item => item.name === foodName)
  if (!meal || meal.name !== '早餐' || !food || !amount) return
  const currentIndex = meal.items.findIndex(item => isBreakfastSlowCarb(item))
  if (currentIndex < 0) return
  meal.items[currentIndex] = buildFoodItem(food, amount)
  saveState()
  renderMeal()
  renderReport()
}

function updateMainMealAmount(itemIndex, amount) {
  const { lunchIndex, dinnerIndex } = mainMealIndexes()
  if (lunchIndex < 0 || dinnerIndex < 0) return
  const item = state.meals[lunchIndex].items[itemIndex]
  const food = item && foods.find(f => f.name === item.name)
  if (!food || !amount) return
  const nextAmount = food.name === '乳清蛋白粉' ? clamp(Math.round(amount), 1, 1) : amount
  state.meals[lunchIndex].items[itemIndex] = buildFoodItem(food, nextAmount)
  state.meals[dinnerIndex].items = cloneItems(state.meals[lunchIndex].items)
  saveState()
  renderMeal()
  renderReport()
}

function updateMealAmount(mealIndex, itemIndex, amount) {
  const item = state.meals[mealIndex].items[itemIndex]
  const food = foods.find(f => f.name === item.name)
  if (!food || !amount) return
  const nextAmount = food.name === '乳清蛋白粉' ? clamp(Math.round(amount), 1, 1) : amount
  state.meals[mealIndex].items[itemIndex] = buildFoodItem(food, nextAmount)
  saveState()
  renderMeal()
  renderReport()
}

function removeMainMealItem(itemIndex) {
  const { lunchIndex, dinnerIndex } = mainMealIndexes()
  if (lunchIndex < 0 || dinnerIndex < 0) return
  state.meals[lunchIndex].items.splice(itemIndex, 1)
  state.meals[dinnerIndex].items = cloneItems(state.meals[lunchIndex].items)
  saveState()
  renderMeal()
  renderReport()
}

function removeMealItem(mealIndex, itemIndex) {
  state.meals[mealIndex].items.splice(itemIndex, 1)
  saveState()
  renderMeal()
  renderReport()
}

function copyMeal(fromIndex, toIndex) {
  if (!state.meals[fromIndex] || !state.meals[toIndex]) return
  state.meals[toIndex].items = JSON.parse(JSON.stringify(state.meals[fromIndex].items || []))
  saveState()
  renderMeal()
  renderReport()
}

function renderTrain() {
  enforceFixedFemaleTemplate()
  setSegmented('venue', state.train.venue)
  setSegmented('trainGender', state.train.gender)
  state.train.cardioPerWeek = cardioSessionsForBmi(getClientBmi())
  $('#cardioPerWeek').textContent = `${state.train.cardioPerWeek}次`
  $('#cardioDuration').value = state.train.cardioDuration ?? ''
  $('#cardioType').value = state.train.cardioType || ''
  renderCardioRecommend()

  $('#trainDays').innerHTML = state.train.days.map((day, dayIndex) => `
    <section class="panel day-card">
      <h3>第${dayIndex + 1}天 · ${escapeHtml(day.label)}<span class="meal-total">${day.exercises.reduce((sum, ex) => sum + Number(ex.sets || 0), 0)} 组</span></h3>
      ${day.exercises.length ? day.exercises.map((ex, exIndex) => `
        <div class="exercise-row">
          <div class="exercise-main"><strong>${exIndex + 1}. ${escapeHtml(ex.name)}</strong><small>${escapeHtml(ex.reps)}</small></div>
          <select class="sets-select" data-day="${dayIndex}" data-ex="${exIndex}">
            ${[1,2,3,4,5,6].map(n => `<option value="${n}" ${Number(ex.sets) === n ? 'selected' : ''}>${n}组</option>`).join('')}
          </select>
          <button class="icon-btn" data-remove-day="${dayIndex}" data-remove-ex="${exIndex}">×</button>
        </div>
      `).join('') : '<div class="empty">从右侧添加动作</div>'}
    </section>
  `).join('')
  $all('.sets-select').forEach(select => select.addEventListener('change', () => {
    state.train.days[Number(select.dataset.day)].exercises[Number(select.dataset.ex)].sets = Number(select.value)
    saveState()
    renderTrain()
    renderReport()
  }))
  $all('[data-remove-day]').forEach(btn => btn.addEventListener('click', () => {
    state.train.days[Number(btn.dataset.removeDay)].exercises.splice(Number(btn.dataset.removeEx), 1)
    saveState()
    renderTrain()
    renderReport()
  }))

  $('#targetDaySelect').innerHTML = state.train.days.map((day, idx) => `<option value="${idx}">第${idx + 1}天 · ${escapeHtml(day.label)}</option>`).join('')
  renderExerciseLibrary()
}

function renderExerciseLibrary() {
  const lib = exerciseLib[state.train.venue]
  const keyword = ($('#exerciseSearch')?.value || '').trim()
  if (!keyword) {
    $('#exerciseLibrary').innerHTML = '<div class="empty compact-empty">输入动作名称后显示可添加项</div>'
    return
  }
  const normalized = keyword.toLowerCase()
  const sections = Object.entries(lib).map(([group, items]) => [group, items.filter(ex => ex.name.toLowerCase().includes(normalized))])
  const hasAny = sections.some(([, items]) => items.length)
  $('#exerciseLibrary').innerHTML = hasAny ? sections.map(([group, items]) => items.length ? `
    <div class="section-label">${groupNames[group]}</div>
    ${items.map(ex => `
      <div class="exercise-option">
        <div><strong>${escapeHtml(ex.name)}</strong><small>${escapeHtml(ex.reps)} × ${escapeHtml(ex.sets)}组</small></div>
        <button class="round-add" data-exercise="${escapeHtml(group)}|${escapeHtml(ex.name)}">+</button>
      </div>
    `).join('')}
  ` : '').join('') : '<div class="empty compact-empty">没有匹配动作，先换个关键词</div>'
  $all('[data-exercise]').forEach(btn => btn.addEventListener('click', () => {
    const [group, name] = btn.dataset.exercise.split('|')
    const ex = exerciseLib[state.train.venue][group].find(item => item.name === name)
    state.train.days[Number($('#targetDaySelect').value || 0)].exercises.push({ ...ex })
    saveState()
    renderTrain()
    renderReport()
  }))
}

function renderCardioRecommend() {
  const plan = getCardioPlan()
  if (!plan) {
    $('#cardioRecommend').textContent = '填写年龄后自动生成心率建议'
    return
  }
  const sessionsText = plan.sessions ? `每周 ${plan.sessions} 次` : '频次待填写'
  const durationText = plan.duration ? `每次 ${plan.duration} 分钟` : '分钟数待填写'
  $('#cardioRecommend').textContent = `低强度有氧：${sessionsText}，${durationText}，目标心率 ${plan.targetHr} 次/分左右。${plan.talkText}`
}

function getCardioPlan() {
  const age = parseInt(state.client.age)
  const weight = parseFloat(state.client.weight) || 70
  const height = parseFloat(state.client.height) || 170
  if (!age) return null
  const bmi = weight / ((height / 100) ** 2)
  const highBmi = bmi >= 28
  const maxHr = 220 - age
  const targetHr = Math.round(maxHr * 0.7)
  const lowHr = Math.round(targetHr - 10)
  const highHr = Math.round(targetHr + 10)
  const speed = highBmi ? '3.5-4.5' : bmi >= 23 ? '4.0-5.0' : '4.5-5.5'
  const incline = highBmi ? '4-8%' : bmi >= 23 ? '6-10%' : '8-12%'
  const sessions = Number(state.train.cardioPerWeek) > 0 ? Number(state.train.cardioPerWeek) : 0
  const duration = Number(state.train.cardioDuration) > 0 ? Number(state.train.cardioDuration) : 0
  return {
    maxHr,
    targetHr,
    hrText: `${targetHr}左右`,
    rangeText: `${lowHr}-${highHr}`,
    speedText: speed,
    inclineText: incline,
    sessions,
    duration,
    durationText: duration ? `${duration}分钟` : '待填写',
    talkText: '没有心率表时，以能正常说话、但有一定喘气为准。',
    sourceText: '默认用最大心率 = 220 - 年龄，目标心率取70%，允许上下约10次/分浮动。',
  }
}

function reportWeightSwitchText(item) {
  const amount = Number(item.amount) || 0
  if (!amount) return ''
  if (item.name === '米饭') return `生米约${Math.round(amount / 2.7)}g / ${amount}g熟重`
  if (item.name === '生米') return `${amount}g生重 / 米饭熟重约${Math.round(amount * 2.7)}g`
  if (item.name === '红薯') return `${amount}g生重`
  if (item.name === '玉米') return `带芯玉米约${cornWithCobCookedWeight(amount)}g熟重`
  if (item.name === '南瓜' || item.name === '山药' || item.name === '芋头') return `${amount}g熟重`
  if (item.name === '生面条') return `${amount}g生重`
  if (item.name === '糙米') return `${amount}g生重 / 熟重约${Math.round(amount * 2.4)}g`
  if (item.name === '去皮鸡腿') return `${amount}根 / 带骨熟重约${Math.round(amount * 120)}g`
  if (/^生.*(鸡胸肉|牛肉|牛里脊|猪里脊|虾仁|去皮鸡腿肉|带皮鸡腿肉|三文鱼)/.test(item.name)) {
    return `${amount}g生重 / 熟重约${Math.round(amount * 0.75)}g`
  }
  return ''
}

function itemAmountText(item) {
  if (item && item.name === '蔬菜') return '150-200g'
  const switchText = reportWeightSwitchText(item)
  if (switchText) return switchText
  return `${item.amount}${item.unit}${item.weightDisplay ? ` ${item.weightDisplay}` : ''}`
}

function breadSlicesForCarbs(carbs) {
  if (!carbs) return 0
  const slices = carbs / 21
  return slices < 1 ? round1(slices) : Math.round(slices)
}

function breakfastSlowCarbChoices(carbs) {
  if (!carbs) return []
  const pumpkin = gramsForMacro(carbs, 5.3)
  const yam = gramsForMacro(carbs, 12.4)
  const taro = gramsForMacro(carbs, 18.1)
  const corn = gramsForMacro(carbs, 22.0)
  return [
    {
      name: '玉米',
      label: '玉米（带芯）',
      group: '薯类慢碳',
      amount: corn,
      text: `约${cornWithCobCookedWeight(corn)}g熟重`,
    },
    { name: '南瓜', label: '南瓜', group: '薯类慢碳', amount: pumpkin, text: `${pumpkin}g熟重` },
    { name: '山药', label: '山药', group: '薯类慢碳', amount: yam, text: `${yam}g熟重` },
    { name: '芋头', label: '芋头', group: '薯类慢碳', amount: taro, text: `${taro}g熟重` },
    { name: '生燕麦', label: '生燕麦', group: '谷物主食', amount: gramsForMacro(carbs, 66.9), text: `${gramsForMacro(carbs, 66.9)}g生重` },
    { name: '粗粮馒头', label: '粗粮馒头', group: '谷物主食', amount: gramsForMacro(carbs, 44.0), text: `${gramsForMacro(carbs, 44.0)}g` },
    { name: '全麦面包', label: '全麦吐司', group: '谷物主食', amount: breadSlicesForCarbs(carbs), text: `${breadSlicesForCarbs(carbs)}片（每片约50g）` },
  ]
}

function isBreakfastSlowCarb(item) {
  return item && breakfastSlowCarbChoices(Number(item.carbs) || 0).some(choice => choice.name === item.name)
}

function breakfastSlowCarbChoiceGrid(item, meal, mealIndex) {
  if (!meal || meal.name !== '早餐' || !isBreakfastSlowCarb(item)) return ''
  const choices = breakfastSlowCarbChoices(Number(item.carbs) || 0)
  const dryChoices = choices.filter(choice => choice.group === '谷物主食')
  const canteenChoices = choices.filter(choice => choice.group === '薯类慢碳')
  const renderChoices = source => source.map(choice => `<button type="button" class="breakfast-carb-option ${choice.name === item.name ? 'selected' : ''}" data-breakfast-carb="${escapeHtml(choice.name)}" data-breakfast-meal="${mealIndex}" data-breakfast-amount="${choice.amount}"><strong>${escapeHtml(choice.label)}</strong><span>${escapeHtml(choice.text)}</span></button>`).join('')
  return `
    <div class="protein-choice-wrap breakfast-carb-choice-wrap">
      <small class="protein-choice-label">早餐慢碳可选（按当前碳水等量换算）</small>
      <div class="breakfast-carb-groups">
        <div class="breakfast-carb-group"><div class="protein-choice-grid">${renderChoices(dryChoices)}</div></div>
        <small class="breakfast-canteen-note">食堂早餐：以下按熟重</small>
        <div class="breakfast-carb-group"><div class="protein-choice-grid">${renderChoices(canteenChoices)}</div></div>
      </div>
    </div>
  `
}

function rootSlowCarbSwapText(carbs, currentName = '') {
  const choices = [
    ['红薯', 20.1, amount => `红薯${amount}g生重`],
    ['玉米', 22.0, amount => `玉米（带芯）${cornWithCobCookedWeight(amount)}g熟重`],
    ['南瓜', 5.3, amount => `南瓜${amount}g熟重`],
    ['山药', 12.4, amount => `山药${amount}g熟重`],
    ['芋头', 18.1, amount => `芋头${amount}g熟重`],
  ]
  return choices
    .filter(([name]) => name !== currentName)
    .map(([, carbsPer100, format]) => format(gramsForMacro(carbs, carbsPer100)))
    .join(' / ')
}

function reportCarbSwapLines(item) {
  if (!item || !item.name) return []
  const carbs = Number(item.carbs) || 0
  if (!carbs) return []
  if (/^(红薯|玉米|南瓜|山药|芋头)$/.test(item.name)) {
    return [`薯类慢碳：${rootSlowCarbSwapText(carbs, item.name)}`]
  }
  if (/^(米饭|生米|糙米)$/.test(item.name)) {
    const riceRaw = gramsForMacro(carbs, 77.2)
    const riceCooked = gramsForMacro(carbs, 25.9)
    const brownRiceRaw = gramsForMacro(carbs, 74.0)
    const brownRiceCooked = Math.round(brownRiceRaw * 2.4)
    return [
      `米类换算：大米${riceRaw}g生重 / 米饭${riceCooked}g熟重 / 糙米${brownRiceRaw}g生重 / 糙米饭约${brownRiceCooked}g熟重`,
      `薯类慢碳：${rootSlowCarbSwapText(carbs)}`,
    ]
  }
  return []
}

function proteinSlotOptions(protein, mealName) {
  const redChoices = [
    `生猪里脊${gramsForMacro(protein, 21.0)}g生重`,
    `生牛肉${gramsForMacro(protein, 21.2)}g生重`,
    `生牛里脊${gramsForMacro(protein, 28.1)}g生重`,
    `卤牛肉${gramsForMacro(protein, 29.0)}g熟重`,
  ]
  const whiteChoices = [
    `生鸡胸肉${gramsForMacro(protein, 24.6)}g生重`,
    `生去皮鸡腿肉${gramsForMacro(protein, 19.0)}g生重`,
    `生虾仁${gramsForMacro(protein, 18.0)}g生重`,
    `生鳕鱼${gramsForMacro(protein, 18.0)}g生重`,
  ]
  return /午餐/.test(mealName || '') ? redChoices : whiteChoices
}

function isMainMealProtein(item) {
  return item && /生鸡胸肉|生牛肉|生牛里脊|生猪里脊|卤牛肉|生羊肉|生去皮鸡腿肉|生带皮鸡腿肉|生虾仁|生鳕鱼/.test(item.name)
}

function reportProteinSlotLabel(meal, item) {
  if (!isMainMealProtein(item)) return ''
  if (meal && /午餐|晚餐/.test(meal.name)) return '蛋白质'
  return ''
}

function reportProteinSwapLine(item, meal) {
  if (!item || !item.name) return ''
  const protein = Number(item.protein) || 0
  if (!protein || !isMainMealProtein(item)) return ''
  const choices = proteinSlotOptions(protein, meal && meal.name)
  const category = /午餐/.test(meal && meal.name || '') ? '红肉' : '白肉'
  return `${category}${choices.length === 3 ? '三选一' : '四选一'}：${choices.join(' / ')}`
}

function reportProteinChoiceGrid(item, meal) {
  if (!item || !isMainMealProtein(item) || !meal || !/午餐|晚餐/.test(meal.name)) return ''
  const choices = proteinSlotOptions(Number(item.protein) || 0, meal.name)
  const category = /午餐/.test(meal.name) ? '红肉' : '白肉'
  const countLabel = `${category}${choices.length === 3 ? '三选一' : '四选一'}`
  return `
    <div class="protein-choice-wrap">
      <small class="protein-choice-label">${countLabel}</small>
      <div class="protein-choice-grid">
        ${choices.map(choice => `<span>${escapeHtml(choice)}</span>`).join('')}
      </div>
    </div>
  `
}

function reportChoiceLine(item) {
  if (!item || !item.name) return ''
  const proteinChoices = [
    ['生鸡胸肉', 24.6],
    ['生牛肉', 21.2],
    ['生猪里脊', 21.0],
    ['卤牛肉', 29.0],
    ['生去皮鸡腿肉', 19.0],
    ['生虾仁', 18.0],
    ['生鳕鱼', 18.0],
  ]
  const slowCarbChoices = [
    ['红薯', 20.1],
    ['玉米', 22.0],
    ['南瓜', 5.3],
    ['山药', 12.4],
    ['芋头', 18.1],
    ['糙米饭团', 28.0],
    ['粗粮馒头', 44.0],
    ['生燕麦', 66.9],
  ]
  if (itemHasTag(item, 'veg')) return ''
  if (/红薯|玉米|糙米饭团|粗粮馒头|糙米/.test(item.name)) {
    const carbs = Number(item.carbs) || 0
    return `同碳水慢碳可换：${slowCarbChoices.filter(([name]) => name !== item.name).map(([name, carbsPer100]) => {
      const amount = gramsForMacro(carbs, carbsPer100)
      return name === '玉米' ? `玉米（带芯）${cornWithCobCookedWeight(amount)}g熟重` : `${name}${amount}g`
    }).join(' / ')}`
  }
  if (/生鸡胸肉|生牛肉|生猪里脊|卤牛肉|生羊肉|生去皮鸡腿肉|生虾仁|生鳕鱼/.test(item.name)) {
    const protein = Number(item.protein) || 0
    const whiteChoices = proteinChoices
      .filter(([name]) => /鸡胸|鸡腿|虾仁/.test(name) && name !== item.name)
      .map(([name, proteinPer100]) => `${name}${gramsForMacro(protein, proteinPer100)}g`)
      .join(' / ')
    const redChoices = proteinChoices
      .filter(([name]) => /牛肉|猪里脊/.test(name) && name !== item.name)
      .map(([name, proteinPer100]) => `${name}${gramsForMacro(protein, proteinPer100)}g`)
      .join(' / ')
    return `同蛋白替换：优先 ${whiteChoices || '鸡胸/去皮鸡腿/虾仁'}；红肉 ${redChoices || '牛肉/猪里脊'} 建议放晚餐。`
  }
  if (item.name === '生带皮鸡腿肉') return '脂肪偏低时用带皮鸡腿；脂肪偏高时换去皮鸡腿/鸡胸/虾仁'
  if (/香蕉|苹果/.test(item.name)) return '水果按整根/整颗执行，不切半'
  if (/纯牛奶|脱脂牛奶/.test(item.name)) return '脂肪偏低用纯牛奶，脂肪偏高用脱脂奶'
  if (item.name === '杏仁') return '坚果只少量补充，通常5-15g'
  if (isOilName(item.name)) return '按实际添加量记录；外食时可改用上方的外食估计油脂。'
  return ''
}

function reportMealContent(meal, options = {}) {
  const { withChoices = false } = options
  const items = meal.items.filter(item => !(estimatedOilGrams() > 0 && isOilName(item.name)))
  if (!items.length) return '<p>未配置</p>'
  return items.map(item => {
    const choice = reportChoiceLine(item)
    const carbSwapLines = reportCarbSwapLines(item)
    const proteinSwap = reportProteinSwapLine(item, meal)
    const proteinChoiceGrid = reportProteinChoiceGrid(item, meal)
    const swapLines = carbSwapLines.length ? carbSwapLines : ((proteinChoiceGrid ? '' : proteinSwap) ? [proteinSwap] : [])
    const proteinSlotLabel = reportProteinSlotLabel(meal, item)
    const mealItemLabel = item.name === '蔬菜' ? '西兰花 / 菠菜 / 芦笋 / 洋葱 / 西葫芦 / 冬瓜' : item.name
    return `
      <div class="report-food-line">
        <div><strong>${escapeHtml(proteinSlotLabel || mealItemLabel)}</strong><span>${escapeHtml(itemAmountText(item))}</span>${swapLines.map(line => `<small class="report-swap-line">${escapeHtml(line)}</small>`).join('')}</div>
        ${proteinChoiceGrid}
        ${withChoices && choice ? `<small>${escapeHtml(choice)}</small>` : ''}
      </div>
    `
  }).join('')
}

function itemsFromMeals(meals) {
  return (meals || []).flatMap(meal => meal && meal.items ? meal.items : [])
}

function averageMealQuantity(items, predicate) {
  const matched = items.filter(predicate)
  if (!matched.length) return 0
  return matched.reduce((sum, item) => sum + itemQuantity(item), 0) / 2
}

function averageMealMacro(items, macro, predicate) {
  const matched = items.filter(predicate)
  if (!matched.length) return 0
  return matched.reduce((sum, item) => sum + (Number(item[macro]) || 0), 0) / 2
}

function mainMealCarbOptions(carbs) {
  if (!carbs) return ''
  const riceCooked = gramsForMacro(carbs, 25.9)
  const riceRaw = Math.round(riceCooked / 2.7)
  const sweetPotato = gramsForMacro(carbs, 20.1)
  const cornCooked = gramsForMacro(carbs, 22.0)
  const noodleRaw = gramsForMacro(carbs, 70.8)
  return `生米${riceRaw}g生重 / 米饭${riceCooked}g熟重 / 红薯${sweetPotato}g生重 / 玉米（带芯）${cornWithCobCookedWeight(cornCooked)}g熟重 / 面条${noodleRaw}g生重`
}

function mainMealProteinOptions(protein, currentName = '') {
  if (!protein) return ''
  const legCount = Math.max(1, Math.round(protein / 21))
  return [
    ['鸡胸肉', `鸡胸肉${gramsForMacro(protein, 24.6)}g生重`],
    ['生牛肉', `生牛肉${gramsForMacro(protein, 21.2)}g`],
    ['去皮鸡腿肉', `去皮鸡腿肉${gramsForMacro(protein, 19.0)}g生重`],
    ['去皮带骨鸡腿', `去皮带骨鸡腿${legCount}根`],
    ['虾仁', `虾仁${gramsForMacro(protein, 18.0)}g生重`],
  ].filter(([name]) => !currentName.includes(name)).map(([, text]) => text).slice(0, 4).join(' / ')
}

function mealItemKind(item) {
  const food = foods.find(f => f.name === item.name)
  if (food && food.type === 'carb') return 'carb'
  if (itemHasTag(item, 'veg')) return 'veg'
  if (isOilName(item.name)) return 'oil'
  if (/鸡胸肉|牛肉|牛里脊|猪里脊|羊肉|虾仁|鳕鱼|去皮鸡腿|带皮鸡腿|三文鱼/.test(item.name)) return 'protein'
  return ''
}

function reportMealSwapLines(meals) {
  const lines = []
  ;(meals || []).forEach(meal => {
    if (!meal || !meal.items) return
    meal.items.forEach(item => {
      const carbSwapLines = reportCarbSwapLines(item)
      const proteinSwap = reportProteinSwapLine(item, meal)
      carbSwapLines.forEach(line => lines.push(`${meal.name}：${line}`))
      if (proteinSwap) lines.push(`${meal.name}：${proteinSwap}`)
    })
  })
  return unique(lines)
}

function renderDietPlanRows() {
  return state.meals.map(meal => (
    `<tr><td class="report-meal-name">${meal.icon} ${escapeHtml(meal.name)}</td><td>${reportMealContent(meal)}</td></tr>`
  )).join('')
}

function renderTrainPlanTable() {
  return state.train.days.map((day, idx) => `
    <tr>
      <td class="report-meal-name">第${idx + 1}天<br>${escapeHtml(day.label)}</td>
      <td>${day.exercises.length ? day.exercises.map((ex, exIdx) => `<div class="report-food-line"><div><strong>${exIdx + 1}. ${escapeHtml(ex.name)}</strong><span>${escapeHtml(ex.reps)} × ${escapeHtml(ex.sets)}组</span></div></div>`).join('') : '未配置动作'}</td>
    </tr>
  `).join('')
}

function renderCardioBlock(options = {}) {
  const { compact = false } = options
  const cardio = getCardioPlan()
  if (!cardio) return '<p>填写年龄后自动生成有氧心率、速度和坡度。</p>'
  return `
    <div class="cardio-box">
      <div><strong>${escapeHtml(cardio.sessions ? `${cardio.sessions}次/周` : '待填写')}</strong><span>建议频次</span></div>
      <div><strong>${escapeHtml(cardio.durationText)}</strong><span>单次时间</span></div>
      <div><strong>${escapeHtml(cardio.hrText)}</strong><span>目标心率/分</span></div>
      <div><strong>${escapeHtml(cardio.speedText)}km/h</strong><span>速度</span></div>
      <div><strong>${escapeHtml(cardio.inclineText)}</strong><span>坡度</span></div>
    </div>
    <p>有氧方式：${escapeHtml(state.train.cardioType || '爬坡/快走')}。${escapeHtml(cardio.talkText)}</p>
    ${compact ? '' : `<p>执行区间：${escapeHtml(cardio.rangeText)}次/分。${escapeHtml(cardio.sourceText)}</p>`}
  `
}

function renderAbsBlock() {
  const items = [
    ['平板支撑', '30-60秒 × 2-3组'],
    ['摸膝卷腹', '12次 × 3-4组'],
    ['仰卧抬腿', '12次 × 3-4组'],
    ['俄罗斯转体', '12次 × 3-4组'],
  ]
  return `
    <div class="abs-box">
      <p>两天一次，接在训练最后。下面4个动作每次选3个，按对应组数执行。</p>
      <div class="abs-exercise-list">${items.map(([item, dose], index) => `<div><strong>${index + 1}. ${escapeHtml(item)}</strong><span>${escapeHtml(dose)}</span></div>`).join('')}</div>
    </div>
  `
}

function getClientBmi() {
  const height = Number(state.client.height) || 0
  const weight = Number(state.client.weight) || 0
  if (height <= 0 || weight <= 0) return null
  return round1(weight / ((height / 100) ** 2))
}

function getClientBmiFromState(sourceState) {
  const height = Number(sourceState?.client?.height) || 0
  const weight = Number(sourceState?.client?.weight) || 0
  if (height <= 0 || weight <= 0) return null
  return round1(weight / ((height / 100) ** 2))
}

function getAutomaticDeficit() {
  return targetCalorieDeficit
}

function renderBmiPriorityPage(pageWatermark) {
  const bmi = getClientBmi()
  const height = Number(state.client.height) || 0
  const weight = Number(state.client.weight) || 0
  const guidance = bmi === null
    ? {
        stage: '等待评估',
        headline: '先填写身高和体重，再生成这张个人训练建议。',
        focus: 'BMI 计算完成后，系统会按当前阶段给出训练优先级。',
        dose: '请先补全身高、体重。',
      }
    : bmi > 28
      ? {
          stage: '大基数阶段',
          headline: `根据您的身高 ${height}cm 和体重 ${weight}kg 计算，BMI 为 ${bmi}，目前属于大基数阶段。`,
          focus: '这一阶段以有氧训练为主，先稳定日常活动量和心肺耐力；力量训练可以不做，也可作为辅助保留基础力量和肌肉。',
          dose: '当前计划有氧每周5次；建议区间为有氧3-5次、力量训练0-3次。',
        }
      : bmi >= 24
        ? {
            stage: '中等基数阶段',
            headline: `根据您的身高 ${height}cm 和体重 ${weight}kg 计算，BMI 为 ${bmi}，目前属于中等基数阶段。`,
            focus: '这一阶段仍以力量训练为主，同时比小基数阶段增加一些有氧，让肌肉维持和热量消耗更均衡。',
            dose: '当前计划有氧每周4次；建议力量训练3-5次，有氧2-3次。',
          }
        : {
            stage: '小基数阶段',
            headline: `根据您的身高 ${height}cm 和体重 ${weight}kg 计算，BMI 为 ${bmi}，目前属于小基数阶段。`,
            focus: '这一阶段更需要保住训练质量和肌肉量，以力量训练为主，有氧作为辅助，不必靠大量有氧硬压体重。',
            dose: '当前计划有氧每周3次；建议力量训练3-5次，有氧0-3次，可根据恢复情况不做有氧。',
          }
  return `
    <section class="report-page bmi-page" data-watermark="${pageWatermark}">
      <h2>你的训练重点建议</h2>
      <p class="bmi-intro">${escapeHtml(guidance.headline)}</p>
      <div class="bmi-summary-grid">
        <div><span>当前 BMI</span><strong>${bmi === null ? '--' : bmi}</strong></div>
        <div><span>所属阶段</span><strong>${escapeHtml(guidance.stage)}</strong></div>
      </div>
      <section class="bmi-guidance-card">
        <h3>这个阶段，怎么练更合适</h3>
        <p>${escapeHtml(guidance.focus)}</p>
        <div><strong>建议安排</strong><span>${escapeHtml(guidance.dose)}</span></div>
      </section>
      <p class="report-total-line">有氧的速度、坡度、目标心率和单次时间，直接按训练页的有氧安排执行；先稳定完成，再按体重和围度变化调整。</p>
    </section>
  `
}

function renderReport() {
  const totals = mealTotals()
  const result = state.result || {}
  const watermark = state.studentWechat ? `方木学员专属 @${state.studentWechat}` : '方木学员专属'
  const sheet = $('#reportSheet')
  sheet.dataset.watermark = watermark
  const pageWatermark = escapeHtml(watermark)
  const clientLine = `${state.client.gender === 'female' ? '女' : '男'} · ${state.client.age || '--'}岁 · ${state.client.height || '--'}cm · ${state.client.weight || '--'}kg`
  const auditLine = buildDietAuditGroups()
    .map(group => `${group.title}：${group.items.map(item => `${item.label}${item.ok ? '达标' : '待补'}(${item.value})`).join(' · ')}`)
    .join(' ｜ ')
  const dietPage = `
    <section class="report-page diet-page" data-watermark="${pageWatermark}">
      <h2>定制饮食方案</h2>
      <p>每天摄入：${totals.cal} kcal</p>
      <div class="summary-line">
        <div><strong>${totals.cal} kcal</strong><span>每日热量</span></div>
        <div><strong>${totals.carbs}g</strong><span>碳水</span></div>
        <div><strong>${totals.protein}g</strong><span>蛋白质</span></div>
        <div><strong>${totals.fat}g</strong><span>脂肪</span></div>
      </div>
      ${estimatedOilGrams() > 0 ? `<p class="report-oil-line">外食估计油脂：${estimatedOilGrams()}g/天（已覆盖餐内具体用油，不重复计算）</p>` : ''}
      <table class="plan-table">
        <thead><tr><th>餐次</th><th>内容</th></tr></thead>
        <tbody>
          <tr class="macro-row"><td>每日摄入</td><td>${totals.cal} kcal / 天</td></tr>
          ${renderDietPlanRows()}
        </tbody>
      </table>
    </section>
  `
  const trainPage = `
    <section class="report-page train-page" data-watermark="${pageWatermark}">
      <h2>定制训练方案</h2>
      <p>${escapeHtml(clientLine)} · ${state.train.venue === 'home' ? '居家版' : '健身房版'}</p>
      <h3>训练安排</h3>
      <table class="plan-table train-report-table">
        <thead><tr><th>训练日</th><th>动作 / 组数</th></tr></thead>
        <tbody>${renderTrainPlanTable()}</tbody>
      </table>
      <div class="train-support-stack">
        <section>
          <h3>腹肌训练</h3>
          ${renderAbsBlock()}
        </section>
        <section>
          <h3>有氧安排</h3>
          ${renderCardioBlock({ compact: true })}
        </section>
      </div>
    </section>
  `
  const bmiPage = renderBmiPriorityPage(pageWatermark)
  const pages = { diet: dietPage, train: trainPage, bmi: bmiPage }
  sheet.classList.toggle('report-all', state.reportMode === 'all')
  sheet.innerHTML = state.reportMode === 'all'
    ? `${dietPage}${trainPage}${bmiPage}`
    : pages[state.reportMode] || pages.diet
}

function activateTab(tab) {
  state.activeTab = tab
  $all('.tab').forEach(btn => {
    const active = btn.dataset.tab === tab
    btn.classList.toggle('active', active)
    const img = $('img', btn)
    if (img) img.src = `../images/tab_${tabNameToIcon(btn.dataset.tab)}${active ? '_active' : ''}.svg`
  })
  $all('.view').forEach(view => view.classList.remove('active'))
  $(`#${tab}View`).classList.add('active')
  if (activateTab.readyToSave) saveState()
}

function tabNameToIcon(tab) {
  return ({ client: 'client', meal: 'meal', train: 'train', report: 'report' })[tab]
}

function importFromText(text) {
  if (!text.trim()) return alert('请先粘贴客户信息')
  const genderLine = (text.match(/性别[^：:\n]*[：:]\s*([^\n]*)/) || [])[1] || ''
  state.client.gender = /女/.test(genderLine || text) ? 'female' : 'male'
  state.client.age = ((text.match(/年龄[^0-9]*(\d+)/) || [])[1]) || state.client.age
  state.client.height = ((text.match(/身高[^0-9]*(\d{2,3})/) || text.match(/(\d{3})\s*cm/i) || [])[1]) || state.client.height
  const weightMatch = text.match(/体重[^\d]*(\d+\.?\d*)\s*(斤|kg|公斤)?/i)
  if (weightMatch) {
    const raw = parseFloat(weightMatch[1])
    state.client.weight = weightMatch[2] === '斤' ? String(round1(raw / 2)) : weightMatch[1]
  }
  const trainM = text.match(/每周训练次数[^0-9]*(\d+)/) || text.match(/每周\s*(\d+)\s*[次练天]/)
  if (trainM) {
    const days = Number(trainM[1])
    state.client.activityIndex = days <= 3 ? 0 : days >= 5 ? 2 : 1
  }
  state.client.trainingAgeIndex = /两年以上|2年以上|超过两年|三年|四年|五年|训练.*[3-9]\s*年/.test(text) ? 1 : 0
  const venueLine = (text.match(/训练场地[^\n]*[：:]\s*([^\n]*)/) || [])[1] || ''
  state.train.venue = /健身房/.test(venueLine)
    ? 'gym'
    : /居家|在家|家里/.test(venueLine || text) ? 'home' : 'gym'
  const selfCook = /自己做饭|自己做|在家做饭|家里做饭/.test(text)
  const noWhey = /(?:没喝|不喝|没有|未喝|无|不吃|没吃).{0,3}(?:乳清)?蛋白粉/.test(text)
  state.dietPreferences = { noWhey, selfCook }
  state.mealMode = /自己做饭|自己做|做饭|称重|按克|克数|生米|生重/.test(text) ? 'gram' : 'unit'
  state.train = buildTrainTemplate(state.train.venue, state.client.gender)
  state.trainTemplateVersion = trainTemplateVersion
  state.result = null
  state.savedMealPlan = null
  saveState()
  renderAll()
  const dietHint = `${noWhey ? '已去掉蛋白粉' : '保留蛋白粉'}${selfCook ? '；午晚餐各配食用油 / 橄榄油12g' : ''}`
  alert(`导入成功：${state.client.gender === 'female' ? '女' : '男'} · ${state.train.venue === 'home' ? '居家' : '健身房'} · ${state.mealMode === 'gram' ? '精准称重' : '估算执行'}。${dietHint}。确认数据后点一键生成饮食。`)
}

function applyFangmuPreset() {
  state.client = {
    ...state.client,
    gender: 'male',
    age: '22',
    height: '172',
    weight: '63',
    activityIndex: 2,
    trainingAgeIndex: 1,
    goalIndex: 0,
    mealCountIndex: 0,
  }
  state.mealMode = 'gram'
  state.train = buildTrainTemplate(state.train.venue || 'gym', 'male')
  state.result = null
  state.meals = emptyMeals(getMealCount())
  renderAll()
}

function reportText() {
  return $('#reportSheet').innerText
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    alert('已复制')
  } catch (err) {
    const area = document.createElement('textarea')
    area.value = text
    document.body.appendChild(area)
    area.select()
    document.execCommand('copy')
    area.remove()
    alert('已复制')
  }
}

async function canvasToPngBlob(canvas) {
  if (typeof canvas.toBlob === 'function') {
    const blob = await new Promise(resolve => {
      let settled = false
      const finish = value => {
        if (settled) return
        settled = true
        resolve(value)
      }
      const timer = window.setTimeout(() => finish(null), 10000)
      try {
        canvas.toBlob(value => {
          window.clearTimeout(timer)
          finish(value)
        }, 'image/png')
      } catch (err) {
        window.clearTimeout(timer)
        finish(null)
      }
    })
    if (blob) return blob
  }
  const dataUrl = canvas.toDataURL('image/png')
  return fetch(dataUrl).then(response => response.blob())
}

function showDownloadFallback(dataUrl, filename) {
  const status = $('#saveStatus')
  if (!status) return null
  status.innerHTML = ''
  const label = document.createElement('span')
  label.textContent = '图片已生成：'
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = filename
  link.textContent = '点击下载 PNG'
  status.append(label, link)
  return link
}

async function downloadCanvasPng(canvas, filename) {
  const blob = await canvasToPngBlob(canvas)
  if (!blob) throw new Error('图片文件生成失败')
  const downloadUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = filename
  link.href = downloadUrl
  document.body.appendChild(link)
  link.click()
  link.remove()
  showDownloadFallback(downloadUrl, filename)
  window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 300000)
  return true
}

async function saveReportImages(triggerButton) {
  if (!window.html2canvas) {
    alert('图片导出组件没有加载成功，先用“打印 / 存 PDF”。')
    return false
  }
  const target = $('#reportSheet')
  if (!target || !$('.report-page', target)) {
    alert('没有可导出的方案')
    return false
  }
  const originalText = triggerButton ? triggerButton.textContent : ''
  if (triggerButton) {
    triggerButton.disabled = true
    triggerButton.textContent = '生成中...'
  }
  try {
    const modeName = state.reportMode === 'diet' ? '饮食方案' : state.reportMode === 'train' ? '训练方案' : 'BMI训练建议'
    const canvas = await window.html2canvas(target, {
      scale: 2,
      backgroundColor: '#f6f7f4',
      useCORS: true,
    })
    const filename = `方木-${modeName}-${state.studentWechat || '学员'}.png`
    await downloadCanvasPng(canvas, filename)
    if (triggerButton) {
      triggerButton.textContent = '已保存'
      window.setTimeout(() => {
        triggerButton.disabled = false
        triggerButton.textContent = originalText
      }, 1200)
    }
    return true
  } catch (err) {
    console.error('saveReportImages failed', err)
    const status = $('#saveStatus')
    if (status) status.textContent = err && err.message ? `图片保存失败：${err.message}` : '图片保存失败，请重试。'
    if (err && err.name !== 'AbortError') alert('图片生成失败，先用“打印 / 存 PDF”。')
    if (triggerButton) {
      triggerButton.disabled = false
      triggerButton.textContent = originalText
    }
    return false
  }
}

async function exportReportMode(mode, triggerButton) {
  const originalMode = state.reportMode
  state.reportMode = mode
  saveState()
  renderReport()
  await new Promise(resolve => requestAnimationFrame(resolve))
  const saved = await saveReportImages(triggerButton)
  state.reportMode = originalMode
  saveState()
  renderReport()
  return saved
}

async function saveAllReportImages(triggerButton) {
  if (!window.html2canvas) {
    alert('图片导出组件没有加载成功，先用“打印 / 存 PDF”。')
    return false
  }
  const originalMode = state.reportMode
  const originalText = triggerButton ? triggerButton.textContent : ''
  if (triggerButton) {
    triggerButton.disabled = true
    triggerButton.textContent = '生成中...'
  }
  try {
    const modes = [
      ['diet', '饮食方案'],
      ['train', '训练方案'],
      ['bmi', 'BMI训练建议'],
    ]
    for (const [mode, modeName] of modes) {
      state.reportMode = mode
      renderReport()
      await new Promise(resolve => requestAnimationFrame(resolve))
      const canvas = await window.html2canvas($('#reportSheet'), {
        scale: 2,
        backgroundColor: '#f6f7f4',
        useCORS: true,
      })
      await downloadCanvasPng(canvas, `方木-${modeName}-${state.studentWechat || '学员'}.png`)
      await new Promise(resolve => setTimeout(resolve, 250))
    }
    state.reportMode = originalMode
    saveState()
    renderReport()
    const status = $('#saveStatus')
    if (status) status.textContent = '饮食、训练和 BMI 训练建议三页已全部生成。'
    return true
  } catch (err) {
    console.error('saveAllReportImages failed', err)
    const status = $('#saveStatus')
    if (status) status.textContent = '批量保存失败，请分别保存。'
    if (err && err.name !== 'AbortError') alert('图片生成失败，可以改为分别保存。')
    return false
  } finally {
    state.reportMode = originalMode
    renderReport()
    if (triggerButton) {
      triggerButton.disabled = false
      triggerButton.textContent = originalText
    }
  }
}

function bindEvents() {
  $all('.tab').forEach(btn => btn.addEventListener('click', () => activateTab(btn.dataset.tab)))
  $all('[data-jump]').forEach(btn => btn.addEventListener('click', () => activateTab(btn.dataset.jump)))

  $all('.segmented').forEach(root => root.addEventListener('click', event => {
    const btn = event.target.closest('button')
    if (!btn) return
    const bind = root.dataset.bind
    const value = btn.dataset.value
    if (bind === 'gender') {
      state.client.gender = value
      state.train = buildTrainTemplate(state.train.venue, value)
      state.result = null
    }
    if (bind === 'mealMode') {
      state.mealMode = value
    }
    if (bind === 'venue') state.train = buildTrainTemplate(value, state.train.gender)
    if (bind === 'trainGender') {
      state.train = buildTrainTemplate(state.train.venue, value)
      state.client.gender = value
      state.result = null
    }
    saveState()
    renderAll()
  }))

  ;['age', 'height', 'weight'].forEach(id => $('#' + id).addEventListener('input', event => {
    state.client[id] = event.target.value
    invalidateResult({ render: false })
  }))

  $('#calculateBtn').addEventListener('click', calculate)
  $('#fangmuPresetBtn').addEventListener('click', applyFangmuPreset)
  $('#copyTemplateBtn').addEventListener('click', () => copyText(`【个人数据】
性别：
年龄：
身高(cm)：
体重(kg)：
体脂：（可发照片，我来判断）

【训练情况】
训练场地（只留一个）：健身房 / 居家
每周训练次数：
训练年限：两年以下 / 两年以上
执行方式：精准称重 / 估算执行
是否练腿：是 / 否

【饮食习惯】
1. 饮食来源（只留一个）：自己做饭 / 食堂 / 外卖：
2. 早餐习惯：
3. 午晚饭习惯：
4. 练后补剂：
5. 有常喝的饮料饮品吗：
6. 忌口 / 不吃的食物：`))
  $('#importBtn').addEventListener('click', () => importFromText($('#importText').value))

  $('#oilGrams').addEventListener('input', event => {
    state.oilGrams = Number(event.target.value) || 0
    const oilHint = $('#oilHint')
    if (oilHint) {
      oilHint.classList.toggle('warn', state.oilGrams > 0)
      oilHint.textContent = state.oilGrams > 0
        ? `已输入外食估计油脂 ${state.oilGrams}g/天，请清空午餐和晚餐原本的“食用油 / 橄榄油”，避免表格重复。`
        : '当前未预设油脂；需要时在餐内搜索“食用油 / 橄榄油”后自行添加。'
    }
    saveState()
    renderMeal()
    renderReport()
  })
  if ($('#foodSearch')) $('#foodSearch').addEventListener('input', renderFoodList)
  $('#exerciseSearch').addEventListener('input', renderExerciseLibrary)
  $('#saveMealPlanBtn').addEventListener('click', saveCurrentMealPlan)
  $('#generateMealBtn').addEventListener('click', () => generateMealFromSavedOrDefault({ jumpToMeal: true }))
  $('#resetMealBtn').addEventListener('click', () => resetMeals())
  $('#clearMealBtn').addEventListener('click', () => {
    if (!confirm('确认清空所有配餐？')) return
    state.meals = emptyMeals(getMealCount())
    saveState()
    renderMeal()
    renderReport()
  })

  $('#resetTrainBtn').addEventListener('click', () => {
    state.train = buildTrainTemplate(state.train.venue, state.train.gender)
    saveState()
    renderTrain()
    renderReport()
  })
  ;['cardioDuration', 'cardioType'].forEach(id => {
    const input = $('#' + id)
    input.addEventListener('input', event => {
      const raw = event.target.value
      state.train[id] = id === 'cardioType' ? raw : raw === '' ? '' : Number(raw)
      saveState()
      renderCardioRecommend()
      renderReport()
    })
    input.addEventListener('change', () => {
      renderTrain()
      renderReport()
    })
  })

  $('#studentWechat').addEventListener('input', event => {
    state.studentWechat = event.target.value
    saveState()
    renderReport()
  })
  $all('[data-export-mode]').forEach(btn => btn.addEventListener('click', () => exportReportMode(btn.dataset.exportMode, btn)))
  $('#exportAllBtn').addEventListener('click', event => saveAllReportImages(event.currentTarget))
}

function renderAll() {
  renderClient()
  renderMeal()
  renderTrain()
  $('#studentWechat').value = state.studentWechat || ''
  renderReport()
}

function bootApp() {
  bindEvents()
  renderAll()
  activateTab.readyToSave = false
  activateTab(state.activeTab || 'client')
  activateTab.readyToSave = true
}

bootApp()
