import categoryModel from "../model/category.model.js"

const getAllCategories = async (req,res) => {
    const {limit= 10,
            page = 1,
            sortField = "_id",
            sortOrder = 1
        } = req.query;

    if (!(Number(limit) && Number(page))) {
        return res.status(400).send({
            message: `limit: ${limit} yoki page: ${page} da xatolik bor`,
        });
    };
    const possibleFields = ["_id", "name", "createdAt","updatedAt"];
    const possibleSorts = [1, -1]
    if (
        !(
            possibleFields.includes(sortField) &&
            possibleSorts.includes(Number(sortOrder))
        )
    ) {
        return res.status(400).send({
            message: "sortorder yoki sortfielddan biri xato berildi",
        });
    }
    const categories = await categoryModel.find()
        .sort({[sortField]:Number(sortOrder)})
        .skip(limit*(page-1))
        .limit(Number(limit))
    res.send({
        message: "success",
        data: categories
    });
};

const getCategory = async (req,res) => {
    const id =req.params.id;
    const category = await categoryModel.findById(id)
    res.send({
        message: "success",
        data: category
    });
};

const addCategory = async (req,res) => {
    const {name} = req.body;
    const data = await categoryModel.create({name})
    const foundedCategory = await categoryModel.findOne({name});

    if(foundedCategory){
        return res.status(409).send({
            message:`bu category allaqachon mavjud`
        })
    }
    res.send({
        message:"data is successfully added",
        data:data
    });
};

const updateCategory = async (req,res) => {
    const id = req.params.id;
    const {name} = req.body;
    const data = await categoryModel.findByIdAndUpdate(id,{name},{new:true})
    res.send({
        message:"data is successfully updated",
        data:data
    });
};

const deleteCategory = async (req,res) => {
    const id = req.params.id;
    const data = await categoryModel.findByIdAndDelete(id)
    res.send({
        message:"data is successfully deleted",
        data:data
    });
};

export default {getAllCategories,getCategory,addCategory,updateCategory,deleteCategory}