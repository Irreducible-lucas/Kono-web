import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/dialog";
import { image, plus } from "@/src/assets";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import styles from "@/src/styles";
import { FormEvent, useRef, useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { NewsType } from "../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNews } from "@/src/api";

const AddNews = () => {
  const queryClient = useQueryClient();
  const [open, setIsOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<NewsType>({
    title: "",
    description: "",
    image: null,
    report: null,
  });

  const mutation = useMutation({
    mutationFn: createNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      toast.success("News created successfully!!!");
      setIsOpen(false);
    },
    onError: () => {
      toast.error("error occurred while creating news");
    },
  });

  const handleFormClose = () => {
    if (mutation.isLoading) {
      toast.warning("Please wait, news saving to the database.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(null);
    setFormData({ title: "", image: null, report: null, description: "" });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    const file = files?.[0];
    const maxSize = 20 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 20mb");
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "report" ? null : value,
      }));
      return;
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "report" ? file || null : value,
      }));
    }
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const file = files?.[0];
    const maxSize = 5 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 5mb");
      return;
    } else {
      setImagePreview(file);
      setFormData((prevState) => ({ ...prevState, image: file || null }));
    }
  };

  const handleFileSelector = () => {
    imageInputRef.current?.click();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Get the authentication token
    // const user = auth.currentUser;
    // const idToken = await user?.getIdToken();

    // if (!user || !idToken) {
    //   toast.error("You must be logged in to perform this action");
    //   return;
    // }

    const submitData = new FormData();
    if (formData.report) {
      submitData.append("report", formData.report);
    } else {
      toast.warning("Please upload report");
      return;
    }

    submitData.append("title", formData.title);
    submitData.append("description", formData.description);

    if (formData.image) {
      submitData.append("image", formData.image);
    } else {
      toast.warning("Please upload image");
      return;
    }
    mutation.mutate(submitData);
  };
  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">Add News</p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add News
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 my-2">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter title"
                name="title"
                onChange={handleInputChange}
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label>Image</Label>
              <input
                type="file"
                name="image"
                accept="image/jpeg, image/png"
                ref={imageInputRef}
                onChange={handleImageInputChange}
                className="hidden"
              />
              {imagePreview ? (
                <div className="flex items-center gap-4">
                  <img
                    src={URL.createObjectURL(imagePreview)}
                    className="h-40 w-40 object-cover object-center"
                  />
                  <button
                    type="button"
                    className="bg-blue-700 text-white py-2 px-4 text-sm rounded-lg"
                    onClick={handleFileSelector}
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <div
                  onClick={handleFileSelector}
                  className="cursor-pointer w-full h-40 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col"
                >
                  <img src={image} className="w-6 h-6" />
                  <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                    Click to upload image
                  </p>
                </div>
              )}
              <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
                Max File Size: 5 MB (jpg, png)
              </p>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                name="description"
                onChange={handleTextAreaChange}
                placeholder="enter description"
                required
                rows={10}
                cols={50}
                className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
              ></textarea>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="document">Report</Label>
              <Input
                id="document"
                name="report"
                type="file"
                accept="application/pdf"
                onChange={handleInputChange}
              />
              <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
                Max File Size: 20 MB (pdf)
              </p>
            </div>
          </div>

          <DialogFooter className="sm:justify-start mt-8">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="border-blue-700 text-blue-700"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={mutation.isLoading}
              className="bg-blue-800 hover:bg-blue-600 text-white w-full mb-2 "
            >
              {mutation.isLoading ? "Saving please wait..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNews;
