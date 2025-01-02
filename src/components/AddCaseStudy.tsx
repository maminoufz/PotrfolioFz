import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import supabase from '../supabaseClient';

interface FormData {
  title: string;
  description: string;
  beforeImage: File | null;
  afterImage: File | null;
  result: string;
}

interface Message {
  text: string;
  type: 'success' | 'error' | null;
}

export function AddCaseStudy() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    beforeImage: null,
    afterImage: null,
    result: '',
  });

  const [message, setMessage] = useState<Message>({ text: '', type: null });
  const [loading, setLoading] = useState<boolean>(false);  // Loading state

  const uploadFile = async (file: File): Promise<string | null> => {
    if (!file) return null;

    const fileName = `${Date.now()}-${file.name}`;

    // Upload to Supabase storage
    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(fileName, file, { cacheControl: '3600', upsert: false });

    if (uploadError) {
      console.error('Error uploading file:', uploadError.message);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from('images')
      .getPublicUrl(fileName);

    if (!publicUrlData || !publicUrlData.publicUrl) {
      console.error('Failed to generate public URL');
      return null;
    }

    return publicUrlData.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);  // Set loading to true when starting submission

    try {
      const beforeImageUrl = formData.beforeImage
        ? await uploadFile(formData.beforeImage)
        : null;
      const afterImageUrl = formData.afterImage
        ? await uploadFile(formData.afterImage)
        : null;

      const { error } = await supabase
        .from('cas')
        .insert([
          {
            title: formData.title,
            description: formData.description,
            result: formData.result,
            before_img: beforeImageUrl,
            after_img: afterImageUrl,
          },
        ]);

      if (error) {
        setMessage({
          text: 'Error adding case study. Please try again.',
          type: 'error',
        });
      } else {
        setMessage({
          text: 'Case study added successfully!',
          type: 'success',
        });
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error during submission:', err);
      setMessage({ text: 'Unexpected error occurred.', type: 'error' });
    } finally {
      setLoading(false);  // Set loading to false after submission is complete
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [e.target.name]: fileInput.files ? fileInput.files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-blue-600 hover:text-blue-700 flex items-center mb-8"
        >
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold mb-8">Add New Case Study</h1>

        {message.text && (
          <div
            className={`mb-4 p-4 rounded-md ${
              message.type === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Before Image</label>
              <input
                type="file"
                name="beforeImage"
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">After Image</label>
              <input
                type="file"
                name="afterImage"
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Result</label>
            <textarea
              name="result"
              value={formData.result}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={loading}  // Disable button when loading
            >
              {loading ? 'Adding Case Study...' : 'Add Case Study'}  {/* Show loading text */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
