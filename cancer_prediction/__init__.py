from cancer_prediction.settings import  modelFile, pklFile
from fastai.vision import *

bs = 8

# df = pd.read_csv(csvFile)
# image_dataset = pd.concat([df['image_path'], df['lesion']], axis=1, keys=['name', 'label'])
# tfms = get_transforms(flip_vert=True)
# data = ImageDataBunch.from_df(".", image_dataset, ds_tfms=tfms, size=450, bs=bs).normalize(imagenet_stats)
# learn = cnn_learner(data, models.resnet34, metrics=accuracy)

# resnet34 = models.resnet34(pretrained=False)
# resnet34.load_state_dict(torch.load(modelFile), strict=False)
# resnet34.eval()

learn = load_learner(pklFile,"pklstage-3.pkl")