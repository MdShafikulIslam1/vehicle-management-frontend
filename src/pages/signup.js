import { useForm } from "react-hook-form";  
import Label from "../components/Shared/Form/Label";
import { useState } from "react";
import Image from 'next/image';

const SignUpPage = () => {
    
    const [avater, setAvater] = useState("");
    const [currentImage, setCurrentImage] = useState(avater || "https://i.ibb.co/SRF75vM/avatar.png");
    console.log("🚀 ~ SignUpPage ~ avater:", avater)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        const imageStoragekey = '68cb5fb5d48334a60f021c30aff06ada'
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${imageStoragekey}`, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => setAvater(result?.data?.display_url))
    } 
     
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}> 
        <div className="">
            <Label>Name *</Label>
            <input
                {...register("name", { required: true })}
                placeholder="Type your Name"
            />
            <div>{errors.name && <span>Name is required</span>}</div>  
        </div> 
        <div className="">
            <Label>Email *</Label>
            <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Type your Email"
            />
            <div>{errors.email && <span>Email is required</span>}</div>  
        </div> 
        <div className="">
            <Label>Password *</Label>
            <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
            />
            <div>{errors.password && <span>Password is required</span>}</div>  
        </div> 
        <div className="">
            <Label>Confirm Password *</Label>
            <input
                type="password"
                {...register("password2", { required: true })}
                placeholder="Confirm Password"
            />
            <div>{errors.password2 && <span>Confirm Password is required</span>}</div>  
        </div>    
        <div className="">
            <Label>Phone *</Label>
            <input 
                {...register("phone", { required: true })}
                placeholder="Phone number"
            />
            <div>{errors.phone && <span>Phone number is required</span>}</div>  
        </div>
        <div className="">
            <Label>Role *</Label>
            <select {...register("role")}
                placeholder="Select Role"
            >
                <option value="user">User</option>
                <option value="driver">Driver</option>
                <option value="admin">Admin</option>
            </select> 
            <div>{errors.role && <span>Role is required</span>}</div>  
        </div>    
        <div className="">
            <Label>Address *</Label>
            <input
                {...register("address", { required: true })}
                placeholder="Type your full address"
            />
            <div>{errors.address && <span>Address is required</span>}</div>  
        </div> 
        <div className="">
            <Label>Location *</Label>
            <input
                {...register("location", { required: true })}
                placeholder="Your Current Location"
            />
            <div>{errors.location && <span>Your Location is required</span>}</div>  
        </div>   

        <div className="flex lg:flex-row flex-col gap-4 justify-center lg:items-center mt-2">
                                     
        <div className="form-control w-full max-w-x">
            <label className="label">
                <span className="label-text text-gray-600 font-semibold">Profile Image</span>
            </label>
            <div className="w-12 h-12 md-w-20 md:h-20 rounded-full">
            <Image
                    src={currentImage}
                    alt='avater'
                    className="w-full
                    object-cover"
                    width={0}
                    height={0}
                    unoptimized
                />
            </div>
            
            <input
                type="file"
                placeholder="Image"
                className="input input-bordered input-warning w-full max-w-x mt-2"
                {...register("image", {
                    onChange: (e) => {
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                setCurrentImage(reader.result);
                            };
                            reader.readAsDataURL(file);
                        } else {
                            setCurrentImage(currentImage);
                        }
                    },

                })}
            />
        </div>
    </div>

            <input type="submit" />
        </form>
      </div>
    );
  };
  
  export default SignUpPage;
  