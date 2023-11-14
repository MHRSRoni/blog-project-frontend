
"use client";
import { useState } from "react";
import { Upload, Label, Tag ,TextInput, Textarea, Button } from "keep-react";
import { CrownSimple, X } from "phosphor-react";
import Navbar2 from "../components/NavBar/NavBar2"

const CreatePost = () => {
  const [fileName, setFileName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  const [dismiss, setDismiss] = useState(false);
  const onDismiss = () => {
    setDismiss(!dismiss);
  };
  return (
  
            <div className="container-fluid flex-col items-center justify-center min-h-screen">
            <Navbar2 />

            <Label value="Blog Title" />
                <TextInput
                    id="#id-8"
                    placeholder="Enter Blog Title"
                    color="gray"
                />
                <Upload id="upload" onFileChange={handleFileChange} file={fileName} />


                <div className="flex w-full flex-row gap-2">
                <Tag
                    disabled={true}
                    dismiss={dismiss}
                    onDismiss={onDismiss}
                    leftIcon={<CrownSimple size={20} />}
                    dismissIcon={<X size={20} />}
                >
                    Tag
                </Tag>
                <Tag
                    color="error"
                    dismiss={false}
                    onDismiss={onDismiss}
                    leftIcon={<CrownSimple size={20} />}
                    dismissIcon={<X size={20} />}
                >
                    Tag
                </Tag>
                <Tag
                    color="info"
                    dismiss={false}
                    onDismiss={onDismiss}
                    leftIcon={<CrownSimple size={20} />}
                    dismissIcon={<X size={20} />}
                >
                    Tag
                </Tag>
                <Tag
                    color="success"
                    dismiss={false}
                    onDismiss={onDismiss}
                    leftIcon={<CrownSimple size={20} />}
                    dismissIcon={<X size={20} />}
                >
                    Tag
                </Tag>
                <Tag
                    color="warning"
                    dismiss={false}
                    onDismiss={onDismiss}
                    leftIcon={<CrownSimple size={20} />}
                    dismissIcon={<X size={20} />}
                >
                    Tag
                </Tag>
                <Tag
                    color="teal"
                    dismiss={false}
                    onDismiss={onDismiss}
                    leftIcon={<CrownSimple size={20} />}
                    dismissIcon={<X size={20} />}
                >
                    Tag
                </Tag>
                <Tag
                    color="purple"
                    dismiss={false}
                    onDismiss={onDismiss}
                    leftIcon={<CrownSimple size={20} />}
                    dismissIcon={<X size={20} />}
                >
                    Tag
                </Tag>
                 </div>

                <Textarea
                id="content"
                placeholder="Blog Content"
                withBg={true}
                color="gray"
                border={true}
                rows={4}
                />

                 <Button size="md" type="primary">Publish</Button>
            </div>


  );
}

export default CreatePost;